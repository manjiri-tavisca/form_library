import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ICaptchaProps {
  onSubmit: Function;
  siteKey: string;
}

export default class Captcha extends Component<ICaptchaProps> {
  constructor(props: ICaptchaProps) {
    super(props);
    this.state = {};
  }
  onChange = (value: any) => {
    this.props.onSubmit(value);
  };

  render() {
    return <ReCAPTCHA sitekey={this.props.siteKey} onChange={this.onChange} />;
  }
}
