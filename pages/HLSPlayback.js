import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export default class HLSPage {
    constructor(page, request) {
        this.page = page;
        this.request = request;
    }

    async validateHLSDurationsAndPlayback(playlistUrl, expectedMinDuration = 6) {
        // 1. Fetch master playlist
        const masterResp = await this.request.get(playlistUrl);
        if (!masterResp.ok()) throw new Error(`Failed to fetch ${playlistUrl}`);
        const masterPlaylist = await masterResp.text();

        // 2. Extract first child/variant playlist
        const variantLines = masterPlaylist.split("\n").filter(l => l && !l.startsWith("#"));
        if (variantLines.length === 0) throw new Error("No variant playlists found in master.m3u8");

        const variantUrl = new URL(variantLines[0], playlistUrl).href;
        console.log("✅ Variant playlist:", variantUrl);

        // 3. Fetch variant playlist
        const variantResp = await this.request.get(variantUrl);
        if (!variantResp.ok()) throw new Error(`Failed to fetch ${variantUrl}`);
        const variantPlaylist = await variantResp.text();

        // 4. Extract chunk durations
        const durations = variantPlaylist
            .split("\n")
            .filter(line => line.startsWith("#EXTINF:"))
            .map(line => parseFloat(line.replace("#EXTINF:", "").replace(",", "")));

        console.log("📺 Chunk durations:", durations);

        if (durations.length === 0) throw new Error("No #EXTINF durations found in playlist");
        durations.forEach(d => {
            if (d < expectedMinDuration) {
                throw new Error(`Chunk duration ${d}s is less than expected ${expectedMinDuration}s`);
            }
        });

        // 5. Extract first .ts segment
        const tsLines = variantPlaylist.split("\n").filter(l => l.endsWith(".ts"));
        if (tsLines.length === 0) throw new Error("No .ts segments found in playlist");

        const tsUrl = new URL(tsLines[0], variantUrl).href;
        console.log("⬇️ Downloading segment:", tsUrl);

        const segResp = await this.request.get(tsUrl);
        if (!segResp.ok()) throw new Error(`Failed to download segment: ${tsUrl}`);

        const segFile = path.resolve("segment.ts");
        fs.writeFileSync(segFile, Buffer.from(await segResp.body()));

        // 6. Run ffprobe on downloaded segment
        const ffprobePath = "J:\\fe\\ffmpeg-8.0-essentials_build\\bin\\ffprobe.exe";
        const cmd = `"${ffprobePath}" -v error -show_streams -of json "${segFile}"`;
        console.log("⚙️ Running:", cmd);

        const result = execSync(cmd).toString();
        const parsed = JSON.parse(result);

        console.log("🎬 ffprobe result:", JSON.stringify(parsed, null, 2));

        const hasVideo = parsed.streams.some(s => s.codec_type === "video");
        const hasAudio = parsed.streams.some(s => s.codec_type === "audio");

        if (!hasVideo || !hasAudio) {
            throw new Error("Playback validation failed: Missing video or audio stream.");
        }

        console.log("✅ Playback validation passed (Video + Audio detected)");
        return { hasVideo, hasAudio, durations };
    }



    async validateHLSChunkCount(playlistUrl, expectedChunkCount) {
        // 1. Fetch master playlist
        const masterResp = await this.request.get(playlistUrl);
        if (!masterResp.ok()) throw new Error(`Failed to fetch ${playlistUrl}`);
        const masterPlaylist = await masterResp.text();

        // 2. Extract first child playlist
        const variantLines = masterPlaylist.split("\n").filter(l => l && !l.startsWith("#"));
        if (variantLines.length === 0) throw new Error("No variant playlists found in master.m3u8");

        const variantUrl = new URL(variantLines[0], playlistUrl).href;
        console.log("Variant playlist:", variantUrl);

        // 3. Fetch variant playlist
        const variantResp = await this.request.get(variantUrl);
        if (!variantResp.ok()) throw new Error(`Failed to fetch ${variantUrl}`);
        const variantPlaylist = await variantResp.text();

        // 4. Extract .ts segments
        const tsLines = variantPlaylist.split("\n").filter(l => l.endsWith(".ts"));
        console.log(`Found ${tsLines.length} chunks`);

        if (tsLines.length !== expectedChunkCount) {
            throw new Error(
                `Chunk count mismatch! Expected ${expectedChunkCount}, got ${tsLines.length}`
            );
        }

        console.log("✅ Chunk count validation passed");
        return tsLines.length;
    }

}



