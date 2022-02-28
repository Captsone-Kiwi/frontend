import React from 'react';
import './styles.css';
import Checkbox from '../../components/Checkbox/Checkbox';
import {
  NavBtn,
  LoginBtnLink,
  } from '../../components/Navbar/NavbarElements';

class LoginForm extends React.Component {

      constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      this.setState({
        errors: errors
      });
      return formIsValid;


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
        <div>
          <NavBtn>
            <LoginBtnLink type="submit" to='/signup'>Create an account</LoginBtnLink>
            <input type="submit" className="button"  value="Login"/>
          </NavBtn>
        </div>
        </form>
    </div>
</div>

      );
  }


}


export default LoginForm;