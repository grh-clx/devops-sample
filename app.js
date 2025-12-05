const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello DevOps from Ganesh R handge! Your app is running in Docker ");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
