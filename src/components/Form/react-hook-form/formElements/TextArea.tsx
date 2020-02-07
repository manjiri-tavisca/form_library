import React from "react";
import validationCreator from "../validators/registerValidationCreator";
import ErrorBox from "../../ErrorBox";
import { IFormFieldProps } from "../interfaces/interfaces";

const TextArea: React.FC<IFormFieldProps> = props => {
  const textarea = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[textarea.name] && props.customEvents[textarea.name]
    : {};
  const validations = validationCreator(
    textarea.validation,
    props.isValidateWithRegister && textarea.isEnableValidation,
    props.customValidation
  );
  return (
    <div className={props.styles[textarea.wrapperCssClass]}>
      {
        <ErrorBox
          cssClass={textarea.validationMessagecssClass}
          currentPosition="above-field-label"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[textarea.name]}
          styles={props.styles}
        />
      }

      <div className={props.styles[textarea["field-label"].cssClass]}>
        {textarea["field-label"].text}
      </div>

      {
        <ErrorBox
          cssClass={textarea.validationMessagecssClass}
          currentPosition="top"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[textarea.name]}
          styles={props.styles}
        />
      }

      <div className={props.styles[textarea.cssClass]}>
        <textarea
          id={textarea.id}
          name={textarea.name}
          placeholder={textarea.placeholder}
          ref={props.register({ ...validations })}
          {...customEvents}
          disabled={props.isDisabled ? "disabled" : ""}
        />
      </div>

      {textarea["field-info"] && (
        <div className={props.styles[textarea["field-info-cssClass"]]}>
          {textarea["field-info"]}
        </div>
      )}

      {
        <ErrorBox
          cssClass={textarea.validationMessagecssClass}
          currentPosition="bottom"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[textarea.name]}
          styles={props.styles}
        />
      }
    </div>
  );
};

export default TextArea;
