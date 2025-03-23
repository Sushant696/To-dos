require('dotenv').config()
console.log("Hello world using node for the first time..");


// Importing express module which is kind of like object and specifying the port
const express = require("express");
const app = express();
const port = 3000;


// a get request
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get request self made

app.get("/home",(req,res)=>{
res.send("Hello wold my first request")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env}`);
});

// But why i need to restart the server 