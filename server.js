const express = require("express");
const http = require('http');
const app = express();
const server = http.createServer(app)

app.set('view engine', 'ejs');

app.get("/", function(req,res) {
    res.render("home");
})

server.listen(3443, () =>{
    console.log("ssl connected");
})