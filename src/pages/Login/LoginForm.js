import React, {useState} from 'react';
import * as api from '../../api/server';
import './styles.css';
import Checkbox from '../../components/Checkbox/Checkbox';

import {
  NavBtn,
  LoginBtnLink,
  Wrap
  } from '../../components/Navbar/NavbarElements';


export function LoginForm(props){
  const [input, setInput] = useState({
      emailid: '',
      password: '',
  });

  const setInputData = (key, data) => {
      setInput({
          ...input,
          [key]: data,
      })
  }

  const login = async () => {
      const { history } = props;
      const token = await api.createToken(input.emailid, input.password);
      if(token.non_field_errors){
          token.non_field_errors.map((e) => alert(e))
      } else{
          console.log(token);
          localStorage.setItem('token', token.token);
          localStorage.setItem('emailid', input.emailid);
          localStorage.setItem('password', input.password);
          // history.push('/');
      }
  };

  return <>
    <div id="register">
        <h3>Login</h3>
          
          <label>Email address</label>
          <input type="text" name={"emailid"} placeholder="Enter your email address" onChange={(e) => setInputData('username', e.target.value)}/>
          
          <label>Password</label>
          <input type="password" name={"password"} placeholder="Enter your password" onChange={(e) => setInputData('password', e.target.value)} />
          

          <NavBtn>
            <div>
              <Checkbox
                // checked={}
                // onChange={}
              />
              <span style={{ marginLeft: 8 }}>Remember me</span>
            </div>
            <span style={{ color: '#3CB371'}}>Reset Password?</span>
        </NavBtn>

        <Wrap>
          <NavBtn>
            <LoginBtnLink type="submit" to='/signup'>Create an account</LoginBtnLink>
            <button onClick={login}>Login</button>
          </NavBtn>
        </Wrap>
    </div>
  </>
}
