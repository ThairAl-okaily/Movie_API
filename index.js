
var express = require("express");
var app = express();
var req = require("request");


app.get("/results", (request, res) =>{
    req("http://www.omdbapi.com/?s=stars&apikey=thewdb", (err, respond) =>{
        if (!err && res.statusCode === 200){
            res.send(respond.body);
        }
    });
});





const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'; 
const server = http.createServer((request, respond) => {
respond.statusCode = 200;
respond.setHeader('Content-Type', 'text/plain');
respond.end("server is running");
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});