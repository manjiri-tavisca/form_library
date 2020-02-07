import React from "react";

export interface IErrorMessageProps {
  message?: string;
  cssClass: string;
  currentPosition?: string;
  displayPosition?: string;
  errorBoxComponent?: any;
  error?: any;
  styles: any;
}

const ErrorMessage: React.FC<IErrorMessageProps> = props => {
  const { cssClass, currentPosition, displayPosition, error } = props;
  const ErrorComponent = props.errorBoxComponent;
  if (currentPosition !== displayPosition || !error) return null;
  const message = getErrorMessage(props.error);
  return (
    (props.errorBoxComponent && <ErrorComponent error={message} />) || (
      <div className={props.styles[cssClass]}>{message}</div>
    )
  );
};

const getErrorMessage = (error: any) => {
  if (typeof error === "string") return error;

  return error.message;
};

export default ErrorMessage;
