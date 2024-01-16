import * as yup from "yup";

export const basicschema = yup.object().shape({
    blogImg: yup.string().required("Image URL is required!"),
    title: yup.string().required("Please Enter Blog Title!"),
    subTitle: yup.string().required("Please Enter Blog Sub-Title!"),
    description: yup.string().required("Please Enter Blog Description!"),
    month: yup.string().required("Please Select DATE!"),
});
