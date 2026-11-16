"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = __importDefault(require("node:http"));
const PORT = 3000;
const users = [
    { id: 1, name: "Sameer", email: "sam123@gmail.com" },
    { id: 2, name: "Pavi", email: "pavi9090@gmail.com" },
    { id: 3, name: "Prateek", email: "prateek164@gmail.com" },
    { id: 4, name: "Vishal", email: "akash9090@gmail.com" },
];
function sendJson(res, statusCode, body) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(body));
}
const server = node_http_1.default.createServer((req, res) => {
    const method = req.method ?? "GET";
    const requestURL = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathname = requestURL.pathname;
    if (method === "GET" && pathname === '/') {
        sendJson(res, 200, {
            success: true,
            message: "Server is running",
            data: {
                routes: ["GET/users"]
            }
        });
        return;
    }
    if (method === "GET" && pathname === "/users") {
        sendJson(res, 200, {
            success: true,
            message: "user fetched successfully",
            data: users
        });
        return;
    }
    sendJson(res, 404, {
        success: false,
        message: "Page not found !!",
        error: `${method} with ${pathname} doesnot exists`
    });
});
server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
//# sourceMappingURL=04-json-response.js.map