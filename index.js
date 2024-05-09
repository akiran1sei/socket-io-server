const io = require("socket.io")(3000);

io.on("connection", (socket) => {
  console.log("A client has connected!");
  socket.on("message", (message) => {
    console.log("Received message:", message);
    io.emit("message", message); // すべての接続クライアントにメッセージをブロードキャスト
  });
  socket.on("disconnect", () => {
    console.log("A client has disconnected.");
  });
});
