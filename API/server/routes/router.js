const express = require('express');
const route = express.Router();

const controller = require("../controller/blog.controller");

// Blog API
route.get("/blog",  controller.findBlog);
route.post("/blog",  controller.postBlog );

module.exports = route;