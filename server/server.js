const http = require("http");
const hostname = "127.0.0.1";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Welcome to my Page!</h1>");
});

server.listen(3000, hostname, () => {
  console.log("Server Running...");
});
