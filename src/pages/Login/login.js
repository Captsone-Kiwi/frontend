import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as style from "./styles";
import * as authAPI from "../../api/authAPI";
import AuthContext from "../../store";

function Login() {
  // const [username, setUsername] = useState("sohyeon");
  // const [room, setRoom] = useState("KIWI");

  const navigator = useNavigate();
  const [, actions] = useContext(AuthContext);
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(event.target);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await authAPI
      .authLogin(values)
      .then((result) => {
        alert("환영합니다! 마이 페이지로 이동합니다.");
        actions.setLoginState(true);
        navigator("/profile");
      })
      .catch(() => {
        alert("비밀번호 또는 이메일이 잘못되었습니다.");
      });
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
            {/* <Link onClick={e => (!username || !room) ? e.preventDefault() : null} to={`/main?username=${username}&room=${room}`}>
                <style.Button>Login</style.Button>
            </Link> */}
          </style.ButtonContainer>
        </style.LoginForm>
      </style.Container>
    </>
  );
}

export default Login;
