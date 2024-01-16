import React from "react";
// import DatePicker from 'react-datepicker';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";

import { basicschema } from "../../../../validation/validation";
import BlogPreview from "../BlogPreview/BlogPreview";
import "../AdminPanel/AdminCss.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  actions.resetForm();
};

const BlogCard = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      blogImg: " ",
      title: "",
      subTitle: "",
      description: "",
      month: "",
    },
    validationSchema: basicschema,
    onSubmit: (data, actions) => {
      handleSumbitt(data, actions);
    },
  });

  const handleSumbitt = (data, actions) => {
    axios
      .post("http://localhost:8080/blog", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Blog created successfully!");
        actions.resetForm();
      })
      .catch((error) => {
        console.log("An error occurred:", error);
        toast.error("Error creating blog. Please try again.");
      });
  };

  return (
    <div className="adminPage">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="blogImg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="blogImg"
            value={values.blogImg}
            onChange={handleChange}
            className={
              errors.blogImg ? "formInput form-control" : "form-control"
            }
          />
          {errors.blogImg && touched.blogImg && (
            <Form.Text>{errors.blogImg}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title :</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            className={errors.title ? "formInput form-control" : "form-control"}
          />
          {errors.title && touched.title && (
            <Form.Text>{errors.title}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="month">
          <Form.Label>DATE</Form.Label>
          <Form.Control
            type="date"
            name="month"
            value={values.month}
            onChange={handleChange}
            className={
              errors.month && touched.month
                ? "formInput form-control"
                : "form-control"
            }
          />
          {errors.month && touched.month && (
            <Form.Text>{errors.month}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="subTitle">
          <Form.Label>Sub Title :</Form.Label>
          <Form.Control
            type="text"
            name="subTitle"
            value={values.subTitle}
            onChange={handleChange}
            className={
              errors.subTitle ? "formInput form-control" : "form-control"
            }
          />
          {errors.subTitle && touched.subTitle && (
            <Form.Text>{errors.subTitle}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={values.description}
            onChange={handleChange}
            className={
              errors.description ? "formInput form-control" : "form-control"
            }
          />
          {errors.description && touched.description && (
            <Form.Text>{errors.description}</Form.Text>
          )}
        </Form.Group>

        <div className="btn">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <ToastContainer />
        </div>
      </Form>
      <BlogPreview value={values} />
    </div>
  );
};

export default BlogCard;
