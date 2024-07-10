const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const multer = require("multer");
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "dev-data/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split(".").pop();
    cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExtension}`);
  },
});
const upload = multer({ storage: storage });

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
