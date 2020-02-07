export interface IFormFieldRendererProps{
    fields:any[];
    errors:any;
    errorMessagePosition:string;
    customValidations?:any;
    initialValues?:any;
    customEvents?:any;
    values?:any;
    handleChange?:any;
    disabledFields?:any;
    errorBoxComponent?:any;
    styles:any;
    captchaComponent?:any;
  }


export interface ITextFieldProps{
    field:any;
    errorMessagePosition:string;
    errors:any;
    customValidation?:any;
    customEvents?:any;
    isDisabled?:boolean;
    errorBoxComponent?:any;
    styles:any;
}

export interface ISelectDropDownProps{
    field:any;
    errorMessagePosition:string;
    errors?:any;
    customValidation?:any;
    customEvents?:any;
    values?:any;
    handleChange?:any;
    isDisabled:boolean;
    errorBoxComponent?:any;
    styles:any;
}

export interface ICheckBoxProps{
    field:any;
    errorMessagePosition:string;
    errors:any;
    customValidation?:any;
    customEvents?:any;
    values:any;
    isDisabled:boolean;
    errorBoxComponent?:any;
    styles:any;
}

export interface ISubmitButtonProps{
    field:any;
    styles:any;
}

export interface IMultiPartFieldProps{
    field:any;
    errorMessagePosition:string;
    errors?:any;
    customValidation?:any;
    customEvents?:any;
    values?:any;
    handleChange?:any;
    isDisabled:boolean;
    errorBoxComponent?:any;
    styles:any;
}
