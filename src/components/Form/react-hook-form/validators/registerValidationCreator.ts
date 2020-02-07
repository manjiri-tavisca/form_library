export default (
  fieldValidationObj: any,
  isCreateValidation: Boolean,
  customValidation: any
) => {
  if (isCreateValidation === false) return {};
  let validationObj: any = {};
  if (fieldValidationObj.required.value) {
    validationObj = { required: fieldValidationObj.required.message };
  }
  if (
    fieldValidationObj.type === "string" &&
    fieldValidationObj.min &&
    fieldValidationObj.min.value !== 0
  ) {
    validationObj["minLength"] = fieldValidationObj.min;
  }
  if (
    fieldValidationObj.type === "string" &&
    fieldValidationObj.max &&
    fieldValidationObj.max.value !== 0
  ) {
    validationObj["maxLength"] = fieldValidationObj.max;
  }
  if (
    fieldValidationObj.type === "number" &&
    fieldValidationObj.min &&
    fieldValidationObj.min.value !== 0
  ) {
    validationObj["min"] = fieldValidationObj.min;
  }
  if (
    fieldValidationObj.type === "number" &&
    fieldValidationObj.max &&
    fieldValidationObj.max.value !== 0
  ) {
    validationObj["max"] = fieldValidationObj.max;
  }
  if (customValidation && customValidation.value && customValidation.message) {
    validationObj["validate"] = value => {
      const isValid = customValidation.value(value);
      return isValid || customValidation.message;
    };
  }
  if (fieldValidationObj.regex && fieldValidationObj.regex.value) {
    validationObj["pattern"] = {
      value: new RegExp(fieldValidationObj.regex.value),
      message: fieldValidationObj.regex.message
    };
  }

  return validationObj;
};
