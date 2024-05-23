const http = require("http");
const file = require("fs");

// creating server using http module
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.url === "/data") {
    file.readFile("./src/data.json", "utf-8", (err, data) => {
      // handling the error and setting the status there
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end("internal server error");
        return;
      }

      //   Handling the correct data
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end("404 Not found");
  }
}); 

// port and server listening to the port
const port = 4000;
server.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
