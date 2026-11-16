import http, { IncomingMessage, ServerResponse } from "node:http"

const PORT = 3000;

type CreateUserBody = {
    name?: string,
    email?: string
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";
    const requestURL = new URL(req.url ?? "/", `http:${req.headers.host}`)
    const pathname = requestURL.pathname
    res.setHeader("Content-Type", "text/plain");

    if (method === "POST" && pathname === "/users") { // this expecst some kind of JSON request body from the client to send to the server
        const chunks: Buffer[] = []

        // this data event is going to run everytimr node receives a new body chunk
        req.on("data", (chunk: Buffer) => {
            chunks.push(chunk)
        })

        req.on("end", () => {
            try {
                const rawBody = Buffer.concat(chunks).toString("utf-8");

            if (!rawBody) {  //1st edge case
                res.statusCode = 400;
                res.end("req body is required");
                return
            }

            const body = JSON.parse(rawBody) as CreateUserBody
            if (!body.name || !body.email) {   // 2nd edge case
                res.statusCode = 400
                res.end("name and email is required");
                return
                }
                
                res.statusCode = 201;
                res.end(`User created ${body.name} and ${body.email}`)
            } catch (err) {
                res.statusCode = 400
                res.end(`invalid json body`)
            }
        })

        req.on("error", () => {
            res.statusCode = 500;
            res.end("failed to read request body")
        })
         return;
    }

    res.statusCode = 404;
    res.end("Route not found")
})

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
    
})