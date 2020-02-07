import React from "react";
import validationCreator from "../validators/registerValidationCreator";
import ErrorBox from "../../ErrorBox";
import { IFormFieldProps } from "../interfaces/interfaces";

const TextFieldRenderer: React.FC<IFormFieldProps> = props => {
  const textField = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[textField.name] && props.customEvents[textField.name]
    : {};
  const validations = validationCreator(
    textField.validation,
    props.isValidateWithRegister && textField.isEnableValidation,
    props.customValidation
  );

  return (
    <div className={props.styles[textField.wrapperCssClass]}>
      {textField.isMultiPart || (
        <ErrorBox
          cssClass={textField.validationMessagecssClass}
          currentPosition="above-field-label"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[textField.name]}
          styles={props.styles}
        />
      )}

      {textField["field-label"] && (
        <div className={props.styles[textField["field-label"].cssClass]}>
          {textField["field-label"].text}
        </div>
      )}

      {textField.isMultiPart || (
        <ErrorBox
          cssClass={textField.validationMessagecssClass}
          currentPosition="top"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[textField.name]}
          styles={props.styles}
        />
      )}

      <div className={props.styles[textField.cssClass]}>
        <input
          type={textField["html-input-type"]}
          id={textField.id}
          name={textField.name}
          placeholder={textField.placeholder}
          ref={props.register({ ...validations })}
          {...customEvents}
          disabled={props.isDisabled ? "disabled" : ""}
        />
      </div>

      {textField["field-info"] && (
        <div className={props.styles[textField["field-info-cssClass"]]}>
          {textField["field-info"]}
        </div>
      )}

      {textField.isMultiPart || (
        <ErrorBox
          cssClass={textField.validationMessagecssClass}
          currentPosition="bottom"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[textField.name]}
          styles={props.styles}
        />
      )}
    </div>
  );
};

export default TextFieldRenderer;
