import http, { IncomingMessage, ServerResponse } from "node:http"

const PORT = 3000;

type User = { // used for req body while sending from client to server
    id: number,
    name: string,
    email: string
}

type ApiResponse<T> = { // type has been defined as how we want our response from the server be look alike
    success: boolean,
    message: string, // like user informatio or product details etc
    data?: T,
    error?: string
}

const users: User[] = [
  { id: 1, name: "Sameer", email: "sam123@gmail.com" },
  { id: 2, name: "Pavi", email: "pavi9090@gmail.com" },
  { id: 3, name: "Prateek", email: "prateek164@gmail.com" },
  { id: 4, name: "Vishal", email: "akash9090@gmail.com" },
];

function sendJson<T>(res: ServerResponse, statusCode: number, body: ApiResponse<T>): void {
    res.statusCode = statusCode;

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(body))
}


const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";
    const requestURL = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathname = requestURL.pathname

    if (method === "GET" && pathname === '/') {
        sendJson(res, 200, {
            success: true,
            message: "Server is running",
            data: {
                routes: ["GET/users"]
            }
        })
        return
    }

    if (method === "GET" && pathname === "/users") {
      sendJson(res, 200, {
        success: true,
        message: "user fetched successfully",
        data: users
      });
        return
    }

    sendJson<null>(res, 404, {
        success: false,
        message: "Page not found !!",
        error: `${method} with ${pathname} doesnot exists`
    })

})

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});