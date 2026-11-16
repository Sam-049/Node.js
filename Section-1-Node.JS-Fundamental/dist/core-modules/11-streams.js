"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_stream_1 = require("node:stream");
const promises_1 = require("node:stream/promises");
const readableStream = node_stream_1.Readable.from([
    "hello ",
    "from ",
    "Node js ",
    "streams"
]);
const transformStream = new node_stream_1.Transform({
    transform(chunk, encoding, callback) {
        const text = chunk.toString();
        callback(null, text.toUpperCase());
    },
});
const writableStream = new node_stream_1.Writable({
    write(chunk, encoding, callback) {
        console.log("received chunk", chunk.toString());
        callback();
    },
});
async function main() {
    try {
        await (0, promises_1.pipeline)(readableStream, transformStream, writableStream);
        console.log("Stream completed !");
    }
    catch (error) {
        const msg = error instanceof Error ? error.message : "unknown";
        console.error("stream failed: ", msg);
    }
}
main();
//# sourceMappingURL=11-streams.js.map