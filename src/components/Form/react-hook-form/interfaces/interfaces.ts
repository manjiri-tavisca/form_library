export interface IFormFieldRendererProps {
  fields: any[];
  register: any;
  errors: any;
  isValidateWithRegister: Boolean;
  errorMessagePosition: string;
  customValidations?: any;
  initialValues?: any;
  customEvents?: any;
  disabledFields?: any;
  errorBoxComponent?: any;
  styles: any;
  captchaComponent?: any;
}

export interface IFormFieldProps {
  field: any;
  register: any;
  isValidateWithRegister: Boolean;
  errorMessagePosition: string;
  errors: any;
  customValidation?: any;
  customEvents?: any;
  isDisabled?: boolean;
  errorBoxComponent?: any;
  styles: any;
  fields?: any;
}

export interface ISubmitButtonProps {
  register: any;
  field: any;
  styles: any;
}
