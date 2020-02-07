import React from "react";
import { Formik, Form } from "formik";
import { IFormProps } from "../interfaces/interfaces";
import FormFields from "./FormFields";
import yupValidationCreator from "../validators/yupValidationCreator";

const FormikWrapper: React.FC<IFormProps> = props => {
  const { jsonForm, customValidations, handleErrors, onSubmit } = props;
  const { initialValues, customEvents, errorSummaryComponent } = props;
  const validationSchema: any = yupValidationCreator(
    jsonForm.formData.useYup,
    getFormFields(jsonForm["section-left"], jsonForm["section-right"]),
    customValidations
  );
  const ErrorSummary = errorSummaryComponent;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        validateField,
        validateForm
      }) => (
        <Form>
          {handleErrors && handleErrors(errors)}
          <div
            className={
              props.styles[jsonForm.formData["error-summary-cssClass"]]
            }
          >
            {errorSummaryComponent && <ErrorSummary errors={errors} />}
          </div>
          <div className={props.styles[jsonForm["section-left"].cssClass]}>
            <FormFields
              fields={jsonForm["section-left"].fields}
              errorMessagePosition={jsonForm.formData["error-message-position"]}
              errors={errors}
              customValidations={customValidations}
              customEvents={customEvents}
              values={values}
              handleChange={handleChange}
              disabledFields={props.disabledFields}
              errorBoxComponent={props.errorBoxComponent}
              styles={props.styles}
              captchaComponent={props.captchaComponent}
            />
          </div>

          {jsonForm["section-right"] && (
            <div className={props.styles[jsonForm["section-right"].cssClass]}>
              <FormFields
                fields={jsonForm["section-right"].fields}
                errorMessagePosition={
                  jsonForm.formData["error-message-position"]
                }
                errors={errors}
                customValidations={customValidations}
                customEvents={customEvents}
                values={values}
                handleChange={handleChange}
                disabledFields={props.disabledFields}
                errorBoxComponent={props.errorBoxComponent}
                styles={props.styles}
                captchaComponent={props.captchaComponent}
              />
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

const getFormFields = (sectionLeft: any, sectionRight: any) => {
  let fields: any[] = [];
  if (sectionLeft && sectionLeft.fields) {
    fields.push(...sectionLeft.fields);
  }

  if (sectionRight && sectionRight.fields) {
    fields.push(...sectionRight.fields);
  }
  return fields;
};

export default FormikWrapper;
