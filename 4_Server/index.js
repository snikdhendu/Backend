
// My first Server


// const http=require("http");

// const server=http.createServer((req,res) =>{
//     console.log('New Req received'); // Print request object to the console.
//     res.end("Hello from Server");
// });

// server.listen(8000,()=>{
//     console.log("Server Started");
// })

// Now if we want to append a text in a text file when there is a request how can we do that let's see

const http=require('http');
const fs=require("fs");

const server=http.createServer((req,res)=>{
    console.log("New req received")
    const log=`${Date.now()}:New req received.\n`; // Log the request to console.log.
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end("Hello from Snikdhendu");
    });

});

server.listen(8000,()=>{console.log("Server Started")});