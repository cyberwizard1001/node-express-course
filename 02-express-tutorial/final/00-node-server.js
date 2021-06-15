const { read } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('user hit the server');
    res.end('home page')               //necessary to stop browser from waiting
})

server.listen(5000);

//Unless response.end() is included, the client keeps waiting for the response to end.