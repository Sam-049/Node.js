"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const PORT = 3000;
const server = node_http_1.default.createServer((req, res) => {
    const method = req.method ?? "GET";
    const requestURL = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathname = requestURL.pathname;
    res.setHeader("Content-Type", "text/plain");
    if (method === "POST" && pathname === "/users") {
        const chunks = [];
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });
        req.on("end", () => {
            try {
                const rawBody = Buffer.concat(chunks).toString("utf-8");
                if (!rawBody) {
                    res.statusCode = 400;
                    res.end("req body is required");
                    return;
                }
                const body = JSON.parse(rawBody);
                if (!body.name || !body.email) {
                    res.statusCode = 400;
                    res.end("name and email is required");
                    return;
                }
                res.statusCode = 201;
                res.end(`User created ${body.name} and ${body.email}`);
            }
            catch (err) {
                res.statusCode = 400;
                res.end(`invalid json body`);
            }
        });
        req.on("error", () => {
            res.statusCode = 500;
            res.end("failed to read request body");
        });
        return;
    }
    res.statusCode = 404;
    res.end("Route not found");
});
server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
//# sourceMappingURL=03-reading-body.js.map