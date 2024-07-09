const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 3000;

const DB = process.env.MONGODB_URI;
mongoose.connect(DB).then(() => {
  console.log("DB connected successfully");
});
app.listen(PORT, () => {
  console.log(`App is running on port ${3000}`);
});

app.set("view engine", "ejs");
