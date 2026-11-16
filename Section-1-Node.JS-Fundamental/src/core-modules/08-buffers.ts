//? When we work with raw binary data. Binary data means when we have data stored in bytes. We can use it in reading files, receiving req bodies, working with streams, handling images, pdf files, videos, encrypt and hashing

//create normal buffer
const textBuffer = Buffer.from("Node"); // <Buffer 4e 6f 64 65> in hexadecimal format
console.log("Buffer created: ",textBuffer);
// we can create string from this buffer
console.log("Converted to String: ",textBuffer.toString("utf-8"));


const engBuffer = Buffer.from("Hello");
console.log(engBuffer.length);


// we can create fixed buffer
const fixedBuffer = Buffer.alloc(5);
console.log("empty fixed buffer",fixedBuffer); //> <Buffer 00 00 00 00 00>
//? we cn fill this emopty buffer with some value also
console.log("Empty buffer filled with: ", fixedBuffer.fill("hi"));
console.log(fixedBuffer.toString());           //> hihih

//* we can write into the existing buffer like:
console.log(fixedBuffer.write("API"));
console.log("fixedBuffer after write: ", fixedBuffer); //> <Buffer 41 50 49 69 68>
console.log(fixedBuffer.toString())             //> APIih

console.log(fixedBuffer.write("REST-API"));
console.log("fixedBuffer after writiting exceeds the limit: ", fixedBuffer); //> <Buffer 52 45 53 54 2d>
console.log(fixedBuffer.toString())             //> REST-

//% When we work in a real world project because of large data, we gonna recieve those data in chunks.
const chunks = [
    Buffer.from("Hello "),
    Buffer.from("Node"),
    Buffer.from(".JS")
]
const combinedBuffer = Buffer.concat(chunks);
console.log("This is the combined buffer ",combinedBuffer, combinedBuffer.length, combinedBuffer.toString('utf-8'));
