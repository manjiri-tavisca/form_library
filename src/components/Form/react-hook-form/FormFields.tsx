import React, { Fragment } from "react";
import formFieldMap from "./formFieldsMap";
import { IFormFieldRendererProps } from "./interfaces/interfaces";

const FormFields: React.FC<IFormFieldRendererProps> = props => {
  return (
    <Fragment>
      {props.fields.map(field => formFieldMap[field.fieldType](field, props))}
    </Fragment>
  );
};

export default FormFields;
