const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const viewsRouter = require("./routes/viewsRoutes");
const messagesRouter = require("./routes/messagesRoutes");

const app = express();
const PORT = 3000;

const DB = process.env.MONGODB_URI;
mongoose.connect(DB).then(() => {
  console.log("DB connected successfully");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", viewsRouter);
app.use("/", messagesRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
