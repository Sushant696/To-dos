const express = require("express");
const data = require("./data.json");
const port = 5500 || 3000;
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  optionSuccessStatus: 200,
};

app.get("/userDetails", cors(corsOptions), (req, res) => {
  res.send(data);
});
app.get("/", (req, res) => {
  res.send("Welcome to home made local api...");
});

app.listen(port, () => {
  console.log(`Listning at port http://localhost:${port}`);
});
