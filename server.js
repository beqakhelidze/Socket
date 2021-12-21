const express = require("express");
const http = require('http');
const path = require("path");
const fs = require("fs");
const app = express();
const server = http.createServer(app)
const io = require("socket.io")(server, {cors:{origin:"*"}});
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');


app.get("/", function(req,res) {
    res.render("home");
})

io.on("connection", (socket,res) =>{
    console.log("user connected: "+ socket.id);

    socket.on("message", (data,room)=>{
        // socket.broadcast.emit("message",data);
        socket.to(room).emit("message",data);
    })

    socket.emit("userId", socket.id);
})

server.listen(port, () =>{
    console.log("ssl connected");
})