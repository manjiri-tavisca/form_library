import React from "react";
import ReactHookForm from "./react-hook-form";
import FormikForm from "./formik";
import { IFormProps } from "./interfaces/interfaces";

const Form: React.FC<IFormProps> = props => {
  return props.jsonForm.formData.type === "react-hook-form" ? (
    <ReactHookForm {...props} />
  ) : (
    <FormikForm {...props}></FormikForm>
  );
};

export default Form;
