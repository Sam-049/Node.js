//? This is used to handle reading and writing data efficiently by processing it piece by piece (in chunks) rather than loading the entire dataset into memory a once.
// read large files
// upload files
// downloading files
// video / audio processing
// compression


// Note - everywhere we shouldnot use streams, when we have large data then only using STREAMS would be meaningful

import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

//# There are different kind of streams :
//<  1. readable streams - has some source od the data from which it will read
//<  2. writable streams - has some destination where the data is being written
//<  3. transform streams - this will read the data, change it and pass it forward

const readableStream = Readable.from([
    "hello ",
    "from ",
    "Node js ",
    "streams"
])

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const text = chunk.toString();

        callback(null, text.toUpperCase());
    },
})

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log("received chunk", chunk.toString());

        callback();
        
    },
})

// Now we have 3 streams but now we have to create one pipeline which will give them the direction
async function main(): Promise<void>{
    try {
        // pipeline is from node:streams/promises
        await pipeline(readableStream, transformStream, writableStream);
        console.log("Stream completed !");
        
    } catch (error) {
        const msg = error instanceof Error ? error.message : "unknown"
        console.error("stream failed: ", msg);
        
    }
}

main()