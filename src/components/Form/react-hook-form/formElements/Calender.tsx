import React, { useState } from "react";
import validationCreator from "../validators/registerValidationCreator";
import ErrorBox from "../../ErrorBox";
import { IFormFieldProps } from "../interfaces/interfaces";
import DatePicker from "react-date-picker";

const Calendar: React.FC<IFormFieldProps> = props => {
  const [currentDate, updateDate] = useState();

  const onChange = date => {
    updateDate(date);
  };

  const calendar = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[calendar.name] && props.customEvents[calendar.name]
    : {};
  const validations = validationCreator(
    calendar.validation,
    props.isValidateWithRegister && calendar.isEnableValidation,
    props.customValidation
  );
  return (
    <div className={props.styles[calendar.wrapperCssClass]}>
      {
        <ErrorBox
          cssClass={calendar.validationMessagecssClass}
          currentPosition={
            props.errorMessagePosition === "top" ||
            props.errorMessagePosition === "above-field-label"
              ? props.errorMessagePosition
              : "top-and-above-field-label"
          }
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[calendar.name]}
          styles={props.styles}
        />
      }

      <DatePicker
        onChange={onChange}
        value={currentDate}
        id={calendar.id}
        name={calendar.name}
        ref={props.register({ ...validations })}
        {...customEvents}
      />

      <ErrorBox
        cssClass={calendar.validationMessagecssClass}
        currentPosition="bottom"
        displayPosition={props.errorMessagePosition}
        errorBoxComponent={props.errorBoxComponent}
        error={props.errors[calendar.name]}
        styles={props.styles}
      />
    </div>
  );
};

export default Calendar;
