import React from "react";
import Card from "react-bootstrap/Card";

import "../AdminPanel/AdminCss.css";

const BlogPreview = ({ value }) => {
  return (
    <div className="BlogPreview"> 
      <h3>Blog Preview</h3>
      <Card>
        <Card.Img variant="top" src={value.blogImg} />
        <Card.Body>
          <Card.Title>{value.title || "Title"}</Card.Title>
          <Card.Title className="subTitle">
            {value.subTitle || "Sub Title"}
          </Card.Title>
          <Card.Text>{value.description || "Description"}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogPreview;
