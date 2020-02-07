import React from "react";
import TextField from "./formElements/TextBox";
import SubmitButton from "./formElements/SubmitButton";
import CheckBox from "./formElements/CheckBox";
import SelectDropdown from "./formElements/SelectDropdown";
import TextArea from "./formElements/TextArea";
import MultiPartField from "./formElements/MultiPartField";
import { MarkedComponent } from "@bit/manjiri-coditas.form_library.marked-component";

export default {
  custom: function(field: any, props: any) {
    return <MarkedComponent key={field.name} rawString={field.content} />;
  },
  submit: function(field: any, props: any) {
    return (
      <SubmitButton
        key={field.name + field.cssClassName}
        field={field}
        register={props.register}
        styles={props.styles}
      />
    );
  },
  checkbox: function(field: any, props: any) {
    return (
      <CheckBox
        key={field.name + field.cssClassName}
        field={field}
        register={props.register}
        isValidateWithRegister={props.isValidateWithRegister}
        errorMessagePosition={props.errorMessagePosition}
        errors={props.errors}
        customValidation={
          props.customValidations ? props.customValidations[field.name] : {}
        }
        customEvents={props.customEvents}
        isDisabled={
          props.disabledFields && props.disabledFields.indexOf(field.name) > -1
        }
        errorBoxComponent={props.errorBoxComponent}
        styles={props.styles}
      />
    );
  },
  select: function(field: any, props: any) {
    return (
      <SelectDropdown
        key={field.name + field.cssClassName}
        field={field}
        register={props.register}
        isValidateWithRegister={props.isValidateWithRegister}
        errorMessagePosition={props.errorMessagePosition}
        errors={props.errors}
        customValidation={
          props.customValidations ? props.customValidations[field.name] : {}
        }
        customEvents={props.customEvents}
        isDisabled={
          props.disabledFields && props.disabledFields.indexOf(field.name) > -1
        }
        errorBoxComponent={props.errorBoxComponent}
        styles={props.styles}
      />
    );
  },
  text: function(field: any, props: any) {
    return (
      <TextField
        key={field.name + field.cssClassName}
        field={field}
        register={props.register}
        isValidateWithRegister={props.isValidateWithRegister}
        errorMessagePosition={props.errorMessagePosition}
        errors={props.errors}
        customValidation={
          props.customValidations ? props.customValidations[field.name] : {}
        }
        customEvents={props.customEvents}
        isDisabled={
          props.disabledFields && props.disabledFields.indexOf(field.name) > -1
        }
        errorBoxComponent={props.errorBoxComponent}
        styles={props.styles}
      />
    );
  },
  textarea: function(field: any, props: any) {
    return (
      <TextArea
        key={field.name + field.cssClassName}
        field={field}
        register={props.register}
        isValidateWithRegister={props.isValidateWithRegister}
        errorMessagePosition={props.errorMessagePosition}
        errors={props.errors}
        customValidation={
          props.customValidations ? props.customValidations[field.name] : {}
        }
        customEvents={props.customEvents}
        isDisabled={
          props.disabledFields && props.disabledFields.indexOf(field.name) > -1
        }
        errorBoxComponent={props.errorBoxComponent}
        styles={props.styles}
      />
    );
  },
  "multi-part": function(field: any, props: any) {
    return (
      <MultiPartField
        key={field.name + field.cssClassName}
        field={field}
        register={props.register}
        isValidateWithRegister={props.isValidateWithRegister}
        errorMessagePosition={props.errorMessagePosition}
        errors={props.errors}
        customValidation={
          props.customValidations ? props.customValidations[field.name] : {}
        }
        customEvents={props.customEvents}
        isDisabled={
          props.disabledFields && props.disabledFields.indexOf(field.name) > -1
        }
        errorBoxComponent={props.errorBoxComponent}
        styles={props.styles}
      />
    );
  },
  captcha: function(field: any, props: any) {
    return props.captchaComponent;
  }
};
