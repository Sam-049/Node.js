import http, {IncomingMessage, ServerResponse} from "node:http";

const PORT = 3000;

// this gonna create low level server and have a callback which gonna run for every incoming request
//< req -> request object 
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    // req has many objects like methods(type of the request), url(requested path), headers(metadata sent by the client), body (data coming from client with post or put)
    // res has also object where data is coming from server like res.status code, headers and body

    const method = req.method;
    //get -> reading data
    //post -> creating new data,
    //put -> replacing the data
    //patch -> updating partial data,
    //delete -> deleteing data

    const url = req.url;
    // which path client has requested

    const userAgent = req.headers["user-agent"];
    // extra information that is being sent along with our request like browser type, auth token, content-type (json, text or html or what),

    res.statusCode = 200
    // set http status code here 200 is success
    //201, 400, 401, 404, 429, 500 etc

    res.setHeader('Content-Type', "text/plain")

    res.end(`Basic http node server: ${method}, ${userAgent}, ${url}`) // every request res cycle has to end.

});

// listning to the server on a particular port
server.listen(PORT,() => {
    console.log(`Server listening on port: ${PORT}`);
    
})