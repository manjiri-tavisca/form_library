import * as yup from "yup";

export default (useYup: boolean, fields: any[], customValidations: any) => {
  if (useYup === false) {
    return null;
  }
  let schema: any = {};
  for (let fieldId in fields) {
    let field = fields[fieldId];
    if (field.isEnableValidation === false) continue;
    if (fields[fieldId].fieldType === "multi-part") {
      for (let index in fields[fieldId].fields) {
        const multiPartField = fields[fieldId].fields[index];
        if (multiPartField.isEnableValidation === false) continue;
        schema[multiPartField.name] = getYupValidations(
          multiPartField,
          customValidations
        );
      }
    } else {
      schema[field.name] = getYupValidations(field, customValidations);
    }
  }
  return yup.object().shape({ ...schema });
};

const getYupValidations = (field: any, customValidations: any) => {
  const fieldValidationObj = field.validation;
  let yupValidationSchema: any = {};
  yupValidationSchema = getYupType(fieldValidationObj.type);
  yupValidationSchema =
    fieldValidationObj.required && fieldValidationObj.required.value
      ? getRequiredValidation(field, yupValidationSchema)
      : yupValidationSchema;
  yupValidationSchema =
    fieldValidationObj.min && fieldValidationObj.min.value !== 0
      ? yupValidationSchema.min(
          fieldValidationObj.min.value,
          fieldValidationObj.min.message
        )
      : yupValidationSchema;
  yupValidationSchema =
    fieldValidationObj.max && fieldValidationObj.max.value !== 0
      ? yupValidationSchema.max(
          fieldValidationObj.max.value,
          fieldValidationObj.max.message
        )
      : yupValidationSchema;
  yupValidationSchema =
    fieldValidationObj.regex && fieldValidationObj.regex.value
      ? yupValidationSchema.matches(
          new RegExp(fieldValidationObj.regex.value),
          fieldValidationObj.regex.message
        )
      : yupValidationSchema;
  yupValidationSchema = getCustomYupFieldType(
    fieldValidationObj,
    yupValidationSchema
  );
  yupValidationSchema = getCustomValidations(
    field,
    yupValidationSchema,
    customValidations
  );
  return yupValidationSchema;
};

const getCustomValidations = (
  field: any,
  yupValidationSchema: any,
  customValidations: any
) => {
  if (customValidations && customValidations[field.name]) {
    yupValidationSchema = yupValidationSchema.test(
      "validate",
      customValidations[field.name].message,
      customValidations[field.name].value
    );
  }
  return yupValidationSchema;
};

const getYupType = (yuptype: string) => {
  switch (yuptype) {
    case "string":
      return yup.string();
    case "number":
      return yup.number();
    case "array":
      return yup.array();
    case "bool":
      return yup.bool();
    default:
      return yup.string();
  }
};

const getCustomYupFieldType = (
  fieldValidationObj: any,
  yupValidationSchema: any
) => {
  if (
    fieldValidationObj.yup &&
    fieldValidationObj.yup.customType &&
    fieldValidationObj.yup.customType.value === "email"
  )
    yupValidationSchema = yupValidationSchema.email(
      fieldValidationObj.yup.customType.message
    );

  return yupValidationSchema;
};

const getRequiredValidation = (field: any, yupValidationSchema: any) => {
  if (field["html-input-type"] === "checkbox") {
    return yupValidationSchema.test(
      field.name,
      field.validation.required.message,
      value => value === true
    );
  }
  return yupValidationSchema.required(field.validation.required.message);
};
