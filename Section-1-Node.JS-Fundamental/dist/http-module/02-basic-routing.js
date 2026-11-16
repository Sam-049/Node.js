"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const PORT = 3000;
const server = node_http_1.default.createServer((req, res) => {
    const method = req.method ?? "GET";
    const requestURL = req.url;
    console.log(requestURL);
    const requestoBJECT = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathname = requestoBJECT.pathname;
    res.setHeader("Content-Type", "text/plain");
    if (method === "GET" && pathname === "/health") {
        res.statusCode = 200;
        res.end("server is healthy");
        return;
    }
    if (method === "POST" && pathname === "/users") {
        res.statusCode = 201;
        res.end("User created successfully");
        return;
    }
    if (method === "GET" && pathname === "/users") {
        res.statusCode = 200;
        res.end("List of users");
        return;
    }
    res.statusCode = 404;
    res.end("Page not found !!");
});
server.listen(PORT, () => {
    console.log(`Server listening in the port: ${PORT}`);
});
//# sourceMappingURL=02-basic-routing.js.map