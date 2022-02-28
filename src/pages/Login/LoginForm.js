import React from 'react';
import Userfront from "@userfront/core";
import './styles.css';
import Checkbox from '../../components/Checkbox/Checkbox';
import {
  NavBtn,
  LoginBtnLink,
  Wrap
  } from '../../components/Navbar/NavbarElements';

Userfront.init("demo1234");

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.message) return "";
    return <div id="alert">{this.props.message}</div>;
  }
}

class LoginForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        emailid: "",
        password: "",

        alertMessage: "",
      };

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
      this.setAlertMessage = this.setAlertMessage.bind(this);

    }

    handleChange(event) {
      event.preventDefault();
      const target = event.target;
      this.setState({
        [target.name]: target.value,
      });
    }
  
    submituserRegistrationForm(event) {
      event.preventDefault();
      this.setAlertMessage();

      let Userfront = {};
      Userfront.login({
        method: "password",
        emailid: this.state.emailid,
        password: this.state.password,
      }).catch((error) => {
        this.setAlertMessage(error.message);
      });
    }

    setAlertMessage(message) {
      this.setState({ alertMessage: message });
    }

  render() {
    return (
    <div>
     <div id="register">
        <h3>Login</h3>
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
          
          <label>Email address</label>
          <input type="text" name="emailid" placeholder="Enter your email address" value={this.state.fields.emailid} onChange={this.handleChange}  />
          <div className="errorMsg">{this.state.errors.emailid}</div>
          
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          
          <Alert message={this.state.alertMessage} />


          <NavBtn>
            <div>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              <span style={{ marginLeft: 8 }}>Remember me</span>
            </div>
            <span style={{ color: '#3CB371'}}>Reset Password?</span>
        </NavBtn>

        <Wrap>
          <NavBtn>
            <LoginBtnLink type="submit" to='/signup'>Create an account</LoginBtnLink>
            <input type="submit" className="button"  value="Login"/>
          </NavBtn>
        </Wrap>
        </form>
    </div>
</div>

      );
  }


}


export default LoginForm;