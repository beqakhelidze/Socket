const express = require("express");
const https = require('https');
const { SocketAddress } = require("net");
const app = express();
const server = https.createServer(app);
const io = require("socket.io")(server, {cors:{origin:"*"}});

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

server.listen(8080, () =>{
    console.log("connected");
})