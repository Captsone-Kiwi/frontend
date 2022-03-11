import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import * as authAPI from "../../api/authAPI";

function Login() {
  const navigator = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(event.target);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = authAPI.authLogin(values);
    console.log("토큰", token);
    if (token.non_field_errors) {
      token.non_field_errors.map((e) => alert(e));
    } else {
      alert("환영합니다!");
      navigator("/");
    }
  };

  return (
    <>
      <style.Container>
        <style.Title>Login</style.Title>
        <style.LoginForm onSubmit={handleSubmit}>
          <style.Span
            color="#7a7a7a"
            size="14px"
            margins="0px 0px 8px 0px"
            weight="bold"
            font="AppleSD"
          >
            Email address
          </style.Span>
          <style.textInput
            InputProps={{ disableUnderline: true }}
            placeholder="Enter your email address"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
          ></style.textInput>
          <style.Span
            color="#7a7a7a"
            size="14px"
            margins="0px 0px 8px 0px"
            weight="bold"
            font="AppleSD"
          >
            Password
          </style.Span>
          <style.textInput
            InputProps={{ disableUnderline: true }}
            placeholder="Enter your password"
            name="password"
            type="password"
            required
            value={values.password}
            onChange={handleChange}
          ></style.textInput>
          <style.LoginUtil>
            <style.CheckForm>
              <style.IdCheckBox type="checkbox" />
              <style.Span color="#929292" weight="bold" font="AppleSD">
                Remember me
              </style.Span>
            </style.CheckForm>
            <style.Span color="#3CB371" weight="bold" font="AppleSD">
              Reset Password?
            </style.Span>
          </style.LoginUtil>
          <style.ButtonContainer>
            <style.Button onClick={() => navigator("/signup")} type="submit">
              Create an account
            </style.Button>
            <style.Button>Login</style.Button>
          </style.ButtonContainer>
        </style.LoginForm>
      </style.Container>
    </>
  );
}

export default Login;
