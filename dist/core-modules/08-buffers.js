"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const textBuffer = Buffer.from("Node");
console.log("Buffer created: ", textBuffer);
console.log("Converted to String: ", textBuffer.toString("utf-8"));
const engBuffer = Buffer.from("Hello");
console.log(engBuffer.length);
const fixedBuffer = Buffer.alloc(5);
console.log("empty fixed buffer", fixedBuffer);
console.log("Empty buffer filled with: ", fixedBuffer.fill("hi"));
console.log(fixedBuffer.toString());
console.log(fixedBuffer.write("API"));
console.log("fixedBuffer after write: ", fixedBuffer);
console.log(fixedBuffer.toString());
console.log(fixedBuffer.write("REST-API"));
console.log("fixedBuffer after writiting exceeds the limit: ", fixedBuffer);
console.log(fixedBuffer.toString());
const chunks = [
    Buffer.from("Hello "),
    Buffer.from("Node"),
    Buffer.from(".JS")
];
const combinedBuffer = Buffer.concat(chunks);
console.log("This is the combined buffer ", combinedBuffer, combinedBuffer.length, combinedBuffer.toString('utf-8'));
//# sourceMappingURL=08-buffers.js.map