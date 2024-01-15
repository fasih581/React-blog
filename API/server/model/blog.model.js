const mongoose = require("mongoose");

const bolgSchema = new mongoose.Schema({
    blogImg: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: [true, 'Blog Title required'],
      },
      subTitle: {
        type: String,
        required: [true, 'Blog Sub Title required'],
      },
      description: {
        type: String,
        required: [true, 'Blog description required'],
      },
});

const blogModel = mongoose.model("newBlog", bolgSchema);

module.exports = blogModel;
