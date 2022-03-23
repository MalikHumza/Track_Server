require('./models/User');
const express = require("express");
const mongoose = require("mongoose");
const appRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(appRoutes);

const mongoUri =
  "mongodb+srv://admin:ideapad300@cluster0.myaoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo Instance");
});

mongoose.connection.on("error", (e) => {
  console.error("Error Connecting to Mongo !!", e);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
