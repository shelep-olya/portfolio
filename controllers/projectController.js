const Project = require("../models/projectModel");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("image");

exports.upload = upload;

exports.createProject = catchAsync(async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    image: {
      data: req.file.filename,
      contentType: "image/png",
    },
  });
  project.save();
  res.status(201).json(project);
});
