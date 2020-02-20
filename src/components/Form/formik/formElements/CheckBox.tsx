import React from "react";
import ErrorBox from "../../ErrorBox";
import { Field } from "formik";
import { ICheckBoxProps } from "../interfaces/interfaces";

const CheckBox: React.FC<ICheckBoxProps> = props => {
  const checkBoxField = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[checkBoxField.name] &&
      props.customEvents[checkBoxField.name]
    : {};
  return (
    <div className={props.styles[checkBoxField.wrapperCssClass]}>
      {
        <ErrorBox
          cssClass={checkBoxField.validationMessagecssClass}
          currentPosition={
            props.errorMessagePosition === "top" ||
            props.errorMessagePosition === "above-field-label"
              ? props.errorMessagePosition
              : "top-and-above-field-label"
          }
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[checkBoxField.name]}
          styles={props.styles}
        />
      }

      {checkBoxField["field-label"].position === "right" && (
        <div className={props.styles[checkBoxField.cssClass]}>
          <label
            className={props.styles[checkBoxField["field-label"].cssClass]}
          >
            <Field
              type={checkBoxField["html-input-type"]}
              id={checkBoxField.id}
              name={checkBoxField.name}
              placeholder={checkBoxField.placeholder}
              checked={props.values[checkBoxField.name]}
              {...customEvents}
              disabled={props.isDisabled ? "disabled" : ""}
            />
            {checkBoxField["field-label"].text}
          </label>
        </div>
      )}
      {checkBoxField["field-label"].position === "left" && (
        <div className={props.styles[checkBoxField.cssClass]}>
          {checkBoxField["field-label"].text}
          <label
            className={props.styles[checkBoxField["field-label"].cssClass]}
          >
            <Field
              type={checkBoxField["html-input-type"]}
              id={checkBoxField.id}
              name={checkBoxField.name}
              placeholder={checkBoxField.placeholder}
              checked={props.values[checkBoxField.name]}
              {...customEvents}
              disabled={props.isDisabled ? "disabled" : ""}
            />
          </label>
        </div>
      )}

      {
        <ErrorBox
          cssClass={checkBoxField.validationMessagecssClass}
          currentPosition="bottom"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[checkBoxField.name]}
          styles={props.styles}
        />
      }
    </div>
  );
};
export default CheckBox;
