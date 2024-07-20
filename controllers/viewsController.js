const Project = require("../models/projectModel");
const catchAsync = require("../utils/catchAsync");
exports.getMainPage = catchAsync(async (req, res) => {
  const projects = await Project.find();
  res.status(200).render("index", { projects });
});
