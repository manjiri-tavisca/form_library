import React from "react";
import TextField from "./formElements/TextBox";
import SubmitButton from "./formElements/SubmitButton";
import SelectDropdown from "./formElements/SelectDropdown";
import CheckBox from "./formElements/CheckBox";
import TextArea from "./formElements/TexArea";
import MultiPartField from "./formElements/MultiPart";
import { MarkedComponent } from "@bit/manjiri-coditas.form_library.marked-component";

export default {
  text: function(field: any, props: any) {
    return (
      <TextField
        key={field.name + field.cssClassName}
        field={field}
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
  checkbox: function(field: any, props: any) {
    return (
      <CheckBox
        key={field.name + field.cssClassName}
        field={field}
        errors={props.errors}
        errorMessagePosition={props.errorMessagePosition}
        values={props.values}
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
        errors={props.errors}
        errorMessagePosition={props.errorMessagePosition}
        values={props.values}
        handleChange={props.handleChange}
        customEvents={props.customEvents}
        isDisabled={
          props.disabledFields && props.disabledFields.indexOf(field.name) > -1
        }
        errorBoxComponent={props.errorBoxComponent}
        styles={props.styles}
      />
    );
  },
  submit: function(field: any, props: any) {
    return (
      <SubmitButton
        key={field.name + field.cssClassName}
        field={field}
        styles={props.styles}
      />
    );
  },
  custom: function(field: any, props: any) {
    return <MarkedComponent key={field.name} rawString={field.content} />;
  },
  textarea: function(field: any, props: any) {
    return (
      <TextArea
        key={field.name + field.cssClassName}
        field={field}
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
        errors={props.errors}
        errorMessagePosition={props.errorMessagePosition}
        values={props.values}
        handleChange={props.handleChange}
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
