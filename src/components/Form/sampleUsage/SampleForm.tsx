import React, { useState } from "react";
import Form from "../formWrapper";
import formInfo from "./sampleForm.json";
import styles from "./sampleForm.module.scss";
import { Captcha } from "@bit/manjiri-coditas.form_library.captcha";

//issues with formik touch
interface IErrorSummaryProps {
  errors: any;
}

//The below function if for react-hook-form
const ErrorSummary: React.FC<IErrorSummaryProps> = props => {
  let errorArr: any[] = [];
  let errorHash: any = {};
  for (let prop in props.errors) {
    if (props.errors[prop].message && !errorHash[props.errors[prop].message]) {
      errorHash[props.errors[prop].message] = props.errors[prop].message;
      errorArr.push(props.errors[prop].message);
    }
  }

  return (
    <div>
      <ul>
        {errorArr.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

interface IErrorBoxProps {
  error: string;
}

//The below function if for react-hook-form
const ErrorBox: React.FC<IErrorBoxProps> = props => {
  return <div style={{ color: "red" }}>{props.error}</div>;
};

//the below function is for formik
// const ErrorSummary:React.FC<IErrorSummaryProps> = props => {
//   let errorArr:any[] = [];
//   let errorHash:any = {};
//   for(let prop in props.errors){
//     // if(props.touched[prop])
//     if( !errorHash[props.errors[prop]]){
//       errorHash[props.errors[prop]] = props.errors[prop];
//       errorArr.push(props.errors[prop]);
//     }
//   }
//   return (<div>
//     <ul>
//       {errorArr.map(error => <li key={error}>{error}</li>)}
//     </ul>
//   </div>);
// }

const passwordCustomValidaiton = value => {
  if (!value)
    // this condition is required for formik coz for formik the value is undefined while for react-hook-forms the value is empty string
    return false;
  if (value.length === 3) return false;

  return true;
};

const emailCustomValidaiton = value => {
  if (!value)
    // this condition is required for formik coz for formik the value is undefined while for react-hook-forms the value is empty string
    return false;
  if (value.length === 7) return false;

  return true;
};

const customValidationsMap = {
  password: {
    value: passwordCustomValidaiton,
    message: "Password cannot be of length 3"
  },
  email: {
    value: emailCustomValidaiton,
    message: "Email cannot be of length 3"
  }
};

const initialValues = {
  email: "ksnauhwar@gmail.com",
  "T&C": true,
  gender: "female"
};

const customEvents = {
  email: {
    onFocus: function() {
      console.log("focus is on email");
    }
  },
  password: {
    onFocus: function() {
      console.log("focus is on password");
    }
  },
  gender: {
    onFocus: function() {
      console.log("focus is on gender");
    }
  },
  "T&C": {
    onClick: function() {
      console.log("click is on T&C");
    }
  }
};

// const disabledFields = ["email","T&C"];

const SampleForm: React.FC<{}> = props => {
  let showCaptcha = true;
  const [isCaptchaValid, setCaptchaValidity] = useState(false);
  const submitCaptcha = value => {
    setCaptchaValidity(!value);
    showCaptcha = !showCaptcha;
  };
  const isCaptchaPresentAndValidated = values => {
    if ((showCaptcha && isCaptchaValid) || !showCaptcha) {
      console.log(values);
    }
  };
  const element = (
    <Captcha
      siteKey="6LcoWJwUAAAAAAP9my8FGDHg24SuU_MlcY_aqyRQ"
      onSubmit={e => {
        submitCaptcha(e);
      }}
    />
  );

  const handleErrors = errors => {
    console.log(errors);
  };
  return (
    <Form
      jsonForm={formInfo}
      onSubmit={isCaptchaPresentAndValidated}
      errorBoxComponent={ErrorBox}
      errorSummaryComponent={ErrorSummary}
      customValidations={customValidationsMap}
      customEvents={customEvents}
      initialValues={initialValues}
      styles={styles}
      captchaComponent={element}
      handleErrors={handleErrors}
    />
  );
};

export default SampleForm;
