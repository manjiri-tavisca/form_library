import React from "react";
import useForm from "react-hook-form";
import { IFormProps } from "../interfaces/interfaces";
import yupValidationCreator from "../validators/yupValidationCreator";
import FormFields from "./FormFields";

const ReactHookForm: React.FC<IFormProps> = props => {
  const {
    jsonForm,
    customValidations,
    errorSummaryComponent,
    handleErrors
  } = props;
  const { onSubmit, initialValues, customEvents, errorBoxComponent } = props;
  const { handleSubmit, register, errors } = useForm({
    validationSchema: yupValidationCreator(
      jsonForm.formData.useYup,
      getFormFields(jsonForm["section-left"], jsonForm["section-right"]),
      customValidations
    ),
    defaultValues: initialValues
  });

  const ErrorSummary = errorSummaryComponent;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={props.styles[jsonForm.formData.cssClass]}
    >
      {handleErrors && handleErrors(errors)}
      <div
        className={props.styles[jsonForm.formData["error-summary-cssClass"]]}
      >
        {errorSummaryComponent && <ErrorSummary errors={errors} />}
      </div>

      <div className={props.styles[jsonForm["section-left"].cssClass]}>
        <FormFields
          fields={jsonForm["section-left"].fields}
          register={register}
          isValidateWithRegister={jsonForm.formData.useYup === false}
          errorMessagePosition={jsonForm.formData["error-message-position"]}
          errors={errors}
          customValidations={customValidations}
          customEvents={customEvents}
          disabledFields={props.disabledFields}
          errorBoxComponent={errorBoxComponent}
          styles={props.styles}
          captchaComponent={props.captchaComponent}
        />
      </div>

      {jsonForm["section-right"] && (
        <div className={props.styles[jsonForm["section-right"].cssClass]}>
          <FormFields
            fields={jsonForm["section-right"].fields}
            register={register}
            isValidateWithRegister={jsonForm.formData.useYup === false}
            errorMessagePosition={jsonForm.formData["error-message-position"]}
            errors={errors}
            customValidations={customValidations}
            customEvents={customEvents}
            disabledFields={props.disabledFields}
            errorBoxComponent={errorBoxComponent}
            styles={props.styles}
            captchaComponent={props.captchaComponent}
          />
        </div>
      )}
    </form>
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
export default ReactHookForm;
