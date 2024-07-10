const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Please provide your project image."],
  },
  name: {
    type: String,
    required: [true, "Please provide your project name."],
  },
  link: {
    type: String,
    required: [true, "Please provide link that points to your project"],
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
