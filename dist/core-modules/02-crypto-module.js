"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = __importDefault(require("node:crypto"));
const requestId = node_crypto_1.default.randomUUID();
console.log({ requestId });
const resetToken = node_crypto_1.default.randomBytes(16).toString("hex");
console.log({ resetToken });
const text = "hello Node";
const hash = node_crypto_1.default.createHash("sha256").update(text).digest("hex");
console.log({ hash });
const secret = "my-super-secret-key";
const message = "user_id=1";
const signature = node_crypto_1.default
    .createHmac("sha256", secret)
    .update(message)
    .digest("hex");
console.log({ signature });
const signatureVerify = node_crypto_1.default
    .createHmac("sha256", secret)
    .update(message)
    .digest("hex");
console.log(`Signature is able to verify and matched ${signature === signatureVerify}`);
//# sourceMappingURL=02-crypto-module.js.map