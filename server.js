const express = require("express");
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get("/", function(req,res) {
    res.render("home");
})

server.listen(port, () =>{
    console.log("ssl connected");
})