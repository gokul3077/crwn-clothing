import React from "react";

import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signINWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handelChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            type="email"
            handleChange={this.handelChange}
            label="email"
          />
          <FormInput
            name="password"
            value={this.state.password}
            required
            type="password"
            handleChange={this.handelChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton onClick={signINWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
