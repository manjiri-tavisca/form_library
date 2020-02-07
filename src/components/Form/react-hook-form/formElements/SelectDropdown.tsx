import React from "react";
import validationCreator from "../validators/registerValidationCreator";
import ErrorBox from "../../ErrorBox";
import { IFormFieldProps } from "../interfaces/interfaces";
import { createArray } from "../../helpers/util";

const SelectDropdown: React.FC<IFormFieldProps> = props => {
  const selectField = props.field;
  const customEvents: any = props.customEvents
    ? props.customEvents[selectField.name] &&
      props.customEvents[selectField.name]
    : {};
  const range = props.field.options.range;
  let optionsRange: string[] = [];
  if (range && Array.isArray(range) && range.length === 3) {
    optionsRange = createArray(range[0], range[1], range[2]);
  }
  const validations = validationCreator(
    selectField.validation,
    props.isValidateWithRegister && selectField.isEnableValidation,
    props.customValidation
  );
  return (
    <div className={props.styles[selectField.wrapperCssClass]}>
      {selectField.isMultiPart || (
        <ErrorBox
          cssClass={selectField.validationMessagecssClass}
          currentPosition="above-field-label"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[selectField.name]}
          styles={props.styles}
        />
      )}

      {selectField["field-label"] && (
        <div className={props.styles[selectField["field-label"].cssClass]}>
          {selectField["field-label"].text}
        </div>
      )}

      {selectField.isMultiPart || (
        <ErrorBox
          cssClass={selectField.validationMessagecssClass}
          currentPosition="top"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[selectField.name]}
          styles={props.styles}
        />
      )}

      <div className={props.styles[selectField.cssClass]}>
        <select
          id={selectField.id}
          name={selectField.name}
          ref={props.register({ ...validations })}
          {...customEvents}
          disabled={props.isDisabled ? "disabled" : ""}
        >
          <option value="" className={props.styles[selectField.optionCssClass]}>
            {selectField["default-value"]}
          </option>
          {Array.isArray(selectField.options) &&
            selectField.options.map(option => {
              return (
                <option
                  className={props.styles[selectField.optionCssClass]}
                  value={option.value}
                  key={option.value}
                >
                  {option.text}
                </option>
              );
            })}
          {Array.isArray(selectField.options) ||
            optionsRange.map(option => {
              return (
                <option
                  className={props.styles[selectField.optionCssClass]}
                  value={option}
                  key={option}
                >
                  {option}
                </option>
              );
            })}
        </select>
        {selectField["field-info"] && (
          <div className={props.styles[selectField["field-info-cssClass"]]}>
            {selectField["field-info"]}
          </div>
        )}
      </div>

      {selectField.isMultiPart || (
        <ErrorBox
          cssClass={selectField.validationMessagecssClass}
          currentPosition="bottom"
          displayPosition={props.errorMessagePosition}
          errorBoxComponent={props.errorBoxComponent}
          error={props.errors[selectField.name]}
          styles={props.styles}
        />
      )}
    </div>
  );
};

export default SelectDropdown;
