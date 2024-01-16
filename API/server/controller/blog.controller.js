const asyncHandler = require("express-async-handler");

const blogModel = require("../model/blog.model");

exports.findBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await blogModel.find();
    res.status(201).json(blog);
  } catch (error) {
    console.error("Error Finding Blog:", error);
    res.status(500).json({
      message: "Internal server error Find blog",
      error: error.message || "Internal Server Error",
    });
  }
});
// GET: find the Blog details End

// POST: post the Blog details
exports.postBlog = asyncHandler(async (req, res) => {
  const data = new blogModel({
    blogImg: req.body.blogImg,
    title: req.body.title,
    subTitle: req.body.subTitle,
    description: req.body.description,
    month: req.body.month,
  });

  data
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error Creating Blog:", err);
      res.status(500).json({
        message: "Internal server error creating blog",
        error: err.message || "Internal Server Error",
      });
    });
});
// POST: post  the Blog details
