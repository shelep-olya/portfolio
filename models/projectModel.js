const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your project's name."],
  },
  image: {
    data: {
      type: Buffer,
      required: [true, "Please provide product's photo data."],
    },
    contentType: {
      type: String,
      required: [true, "Please provide product's photo content type."],
    },
  },
  description: {
    type: String,
    required: [true, "Please enter description to your project."],
  },
  link: {
    type: String,
    required: [true, "Please enter link to your project."],
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
