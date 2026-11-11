import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = 3000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";

    const requestURL = req.url; // this contains the path requested by the client
    console.log(requestURL);
    
    //* so as to red this url, we need to conbvert them into the url object and then we can access its diff parts
    const requestoBJECT = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathname = requestoBJECT.pathname;

    res.setHeader("Content-Type", "text/plain")
    if (method === "GET" && pathname === "/health") {
        res.statusCode = 200;
        res.end("server is healthy")
        return
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
    //if the requested path doesnot exist
    res.statusCode = 404;
    res.end("Page not found !!")
}) 

server.listen(PORT, () => {
    console.log(`Server listening in the port: ${PORT}`);
})