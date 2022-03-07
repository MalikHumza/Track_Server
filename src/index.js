const express = require("express");
const mongoose = require("mongoose");

const app = express();
const mongoUri =
  "mongodb+srv://admin:ideapad300@cluster0.myaoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo Instance");
});

mongoose.connection.on("error", (e) => {
  console.error("Error Connecting to Mongo !!", e);
});

app.get("/", (req, res) => {
  res.send("Hi Server is Up and Running !!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
