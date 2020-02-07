import React from "react";
import { Field } from "formik";
import ErrorBox from "../../ErrorBox";
import { ITextFieldProps } from "../interfaces/interfaces";

const TextField: React.FC<ITextFieldProps> = props => {
  const textField = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[textField.name] && props.customEvents[textField.name]
    : {};
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
        <Field
          name={textField.name}
          type={textField["html-input-type"]}
          placeholder={textField.placeholder}
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

export default TextField;
