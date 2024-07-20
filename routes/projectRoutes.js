const express = require("express");

const viewsController = require("../controllers/viewsController");
const projectController = require("../controllers/projectController");

const router = express.Router();
router.post("/", projectController.upload, projectController.createProject);

module.exports = router;
