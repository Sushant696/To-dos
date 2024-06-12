// const { MongoClient } = require("mongodb");
import MongoClient from "mongodb"
const uri = process.env.DATABASE_URI;
console.log(uri);
console.log("hello");

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB", err);
    return;
  }
  console.log("Connected successfully to MongoDB!");
  client.close();
});
