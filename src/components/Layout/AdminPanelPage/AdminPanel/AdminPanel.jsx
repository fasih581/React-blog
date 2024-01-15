import React from "react";
import Header from "../../common/Header";
import BlogPreview from "../BlogPreview/BlogPreview";
import BlogCard from "../BlogCard/BlogCard"

import "./AdminCss.css"

const AdminPanel = () => {
  return (
    <>
      <Header />
      <div className="box">
          <BlogCard />
      </div>
    </>
  );
};

export default AdminPanel;
