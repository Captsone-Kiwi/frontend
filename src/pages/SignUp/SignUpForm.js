import React from "react";
import * as api from "../../api/server";
import "./style.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { LoginBtnLink, Wrap } from "../../components/Navbar/NavbarElements";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
  }

  handleChange = (event) => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields,
    });
  };

  submituserRegistrationForm = async (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["name"] = this.state.fields.name;
      fields["email"] = this.state.fields.email;
      fields["password"] = this.state.fields.password;
      this.setState({ fields: fields });

      const { history } = this.props;
      const token = await api.createUser(fields);
      if (token.non_field_errors) {
        token.non_field_errors.map((event) => alert(event));
      } else {
        history.push("/");
      }
      alert("Form submitted");
    }
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your full name.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email address.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email address.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!fields["confirm_password"]) {
      formIsValid = false;
      errors["confirm_password"] = "*Please enter your confirm password.";
    }

    if (
      typeof fields["confirm_password"] !== "undefined" &&
      typeof fields["password"] !== "undefined"
    ) {
      if (fields["password"] != fields["confirm_password"]) {
        formIsValid = false;
        errors["confirm_password"] = "*Passwords don't match";
      }
    }
    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <div id="register">
          <h3>Create an account</h3>
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>Full legal name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your full names"
              value={this.state.fields.username}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.username}</div>

            <label>Email address</label>
            <input
              type="text"
              name="emailid"
              placeholder="Enter your email address"
              value={this.state.fields.emailid}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.emailid}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.password}</div>

            <label>Password Confirm</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Enter your confirm password"
              value={this.state.fields.confirm_password}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.confirm_password}</div>

            <label>
              <Checkbox
              // checked={this.state.checked}
              // onChange={this.handleCheckboxChange}
              />
              <span style={{ marginLeft: 8 }}>
                I have read the Privacy Acknowledgement.
              </span>
            </label>
            <Wrap>
              <LoginBtnLink type="submit" to="/login">
                Login
              </LoginBtnLink>
              <input
                type="submit"
                className="button"
                value="Create an account"
              />
            </Wrap>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
