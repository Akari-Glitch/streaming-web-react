const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInWorkshop } = require("./users");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on("connect", (socket) => {
  socket.on("join", ({ name, workshop }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, workshop });

    if (error) return callback(error);

    socket.join(user.workshop);

    socket.emit("message", {
      user: "StacklyBOT",
      text: `Hey, ${user.name} bienvenido/a al taller ${user.workshop}.`,
    });

    io.to(user.workshop).emit("workshopData", {
      workshop: user.workshop,
      users: getUsersInWorkshop(user.workshop),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.workshop).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.workshop).emit("workshopData", {
        workshop: user.workshop,
        users: getUsersInWorkshop(user.workshop),
      });
    }
  });
});

server.listen(process.env.PORT || 3333, () =>
  console.log(`Servidor iniciado.`)
);
