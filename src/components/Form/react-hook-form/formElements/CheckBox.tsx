import React from "react";
import validationCreator from "../validators/registerValidationCreator";
import ErrorBox from "../../ErrorBox";
import { IFormFieldProps } from "../interfaces/interfaces";

const CheckBox: React.FC<IFormFieldProps> = props => {
  const checkBoxField = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[checkBoxField.name] &&
      props.customEvents[checkBoxField.name]
    : {};
  const validations = validationCreator(
    checkBoxField.validation,
    props.isValidateWithRegister && checkBoxField.isEnableValidation,
    props.customValidation
  );
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
            <input
              type={checkBoxField["html-input-type"]}
              id={checkBoxField.id}
              name={checkBoxField.name}
              placeholder={checkBoxField.placeholder}
              ref={props.register({ ...validations })}
              {...customEvents}
              disabled={props.isDisabled ? "disabled" : ""}
            />
            {checkBoxField["field-label"].text}
          </label>
        </div>
      )}

      {checkBoxField["field-label"].position === "left" && (
        <div className={props.styles[checkBoxField.cssClass]}>
          <label
            className={props.styles[checkBoxField["field-label"].cssClass]}
          >
            {checkBoxField["field-label"].text}
            <input
              type={checkBoxField["html-input-type"]}
              id={checkBoxField.id}
              name={checkBoxField.name}
              placeholder={checkBoxField.placeholder}
              ref={props.register({ ...validations })}
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
