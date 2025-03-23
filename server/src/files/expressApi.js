const express = require("express");
const accessExpress = express();
const datas = require("./data");

accessExpress.get("/", (req, res) => {
  res.send(datas);
  res.status(200);
});

accessExpress.get("/user", (req, res) => {
  res.send("Hello here are students datas");
  res.status(200);
});

accessExpress.listen(3000, () => {
  console.log("Hello World listening on port 3000");
});
