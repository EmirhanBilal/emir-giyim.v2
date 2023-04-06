const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  //   socket.on("send_message", (data) => {
  //     console.log(data);
  //     socket.broadcast.emit("recive_message", data);
  //   });
  socket.on("send_cartProducts", (data) => {
    console.log(data);
    socket.broadcast.emit("recive_cartProducts", data);
  });
  //   socket.on("send-login", (data) => {
  //     console.log(data);
  //     socket.broadcast.emit("recive_login", data);
  //   });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNİNG");
});
