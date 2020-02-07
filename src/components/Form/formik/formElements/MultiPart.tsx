import React from "react";
import { IMultiPartFieldProps } from "../interfaces/interfaces";
import ErrorBox from "../../ErrorBox";
import formFieldMap from "../fieldMap";

const MultiPart: React.FC<IMultiPartFieldProps> = props => {
  const multiPartField = props.field;
  return (
    <div className={props.styles[props.field.cssClass]}>
      {isDisplayError(props.errors, multiPartField.fields) && (
        <ErrorBox
          cssClass={multiPartField.validationMessagecssClass}
          currentPosition="above-field-label"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={
            props.errors[getErrorFieldName(props.errors, multiPartField.fields)]
          }
          styles={props.styles}
        />
      )}

      {multiPartField["field-label"] && (
        <div className={props.styles[multiPartField["field-label"].cssClass]}>
          {multiPartField["field-label"].text}
        </div>
      )}
      {isDisplayError(props.errors, multiPartField.fields) && (
        <ErrorBox
          cssClass={multiPartField.validationMessagecssClass}
          currentPosition="top"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={
            props.errors[getErrorFieldName(props.errors, multiPartField.fields)]
          }
          styles={props.styles}
        />
      )}
      {multiPartField.fields.map((field: any) => {
        field.isMultiPart = true;
        return formFieldMap[field.fieldType](field, props);
      })}
      {isDisplayError(props.errors, multiPartField.fields) && (
        <ErrorBox
          cssClass={multiPartField.validationMessagecssClass}
          currentPosition="bottom"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={
            props.errors[getErrorFieldName(props.errors, multiPartField.fields)]
          }
          styles={props.styles}
        />
      )}
    </div>
  );
};

const isDisplayError = (errors: any, fields: any) => {
  for (let index in fields) {
    if (errors.hasOwnProperty(fields[index].name)) return true;
  }
  return false;
};

const getErrorFieldName = (errors: any, fields: any) => {
  for (let index in fields) {
    if (errors.hasOwnProperty(fields[index].name)) return fields[index].name;
  }

  return "";
};

export default MultiPart;
