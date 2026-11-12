const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
if (req.url == "/shoes") {
    res.end("Shoe page agya")
}
else {
    res.end("Server is working")
}
})

server.listen(5500,"127.0.0.1",()=>{
console.log("server is listening on 4990 port");

})