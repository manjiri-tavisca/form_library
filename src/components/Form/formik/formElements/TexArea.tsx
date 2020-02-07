import React from "react";
import { Field } from "formik";
import ErrorBox from "../../ErrorBox";
import { ITextFieldProps } from "../interfaces/interfaces";

const TextArea: React.FC<ITextFieldProps> = props => {
  const textarea = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[textarea.name] && props.customEvents[textarea.name]
    : {};
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
        <Field
          name={textarea.name}
          component="textarea"
          placeholder={textarea.placeholder}
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
