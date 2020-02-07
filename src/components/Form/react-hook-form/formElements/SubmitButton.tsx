import React from "react";
import { ISubmitButtonProps } from "../interfaces/interfaces";

const SubmitButton: React.FC<ISubmitButtonProps> = props => {
  return (
    <div className={props.styles[props.field.wrapperClass]}>
      <input
        type={props.field["html-input-type"]}
        name={props.field.name}
        value={props.field.text}
      />
    </div>
  );
};

export default SubmitButton;
