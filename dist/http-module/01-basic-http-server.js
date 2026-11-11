"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const PORT = 3000;
const server = node_http_1.default.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const userAgent = req.headers["user-agent"];
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/plain");
    res.end(`Basic http node server: ${method}, ${userAgent}, ${url}`);
});
server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
//# sourceMappingURL=01-basic-http-server.js.map