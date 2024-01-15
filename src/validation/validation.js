import * as yup from "yup";

export const basicschema = yup.object().shape({
    blogImg: yup.string().required("Please Enter Blog Image URL!"),
    title: yup.string().required("Please Enter Blog Title!"),
    subTitle: yup.string().required("Please Enter Blog Sub-Title!"),
    description: yup.string().required("Please Enter Blog Description!"),
});
