//회원가입
export function createUser(fields) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: fields.name,
    email: fields.email,
    password: fields.password,
    memberType: fields.memberType,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log("createUser result", result))
    .catch((error) => console.log("createUser error", error));
  return result;
}
// 로그인
export function authLogin(fields) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: fields.email,
    password: fields.password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/signin", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log("authLogin result", result);
      window.sessionStorage.setItem("token", result.data);
    })
    .catch((error) => console.log("authLogin error", error));
  return result;
}

// 로그아웃
export function authLogout() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // var raw = JSON.stringify({
  //   email: fields.email,
  //   password: fields.password,
  // });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    // body: raw,
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/signout", null)
    .then((result) => {
      console.log("authLogout result", result);
      window.sessionStorage.clear();
    })
    .catch((error) => console.log("authLogout error", error));
  return result;
}

//유저정보 받아오기
export function getUsername() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // var raw = JSON.stringify({
  //   email: fields.email,
  //   password: fields.password,
  // });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: raw,
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/getUsername", requestOptions)
    // .then((response) => response.text())
    .then((result) => {
      console.log("getUsername result", result);
      window.sessionStorage.setItem("token", result.data);
    })
    .then((result) => {
      console.log("결과값", result);
      console.log("닉네임", result.data);
    })
    .catch((error) => console.log("getUsername error", error));
  return result;
}

// 토큰
export async function createToken(emailid, password) {
  const response = await fetch("", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailid: emailid,
      password: password,
    }),
  });
  return await response.json();
}

// import axios from "./config";
// import { tokenConfig } from "./tokenConfig";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   createUser(data) {
//     return axios.post("signup", data);
//   },
//   authLogin(data) {
//     return axios.post("signin", data);
//   },
//   authLogout() {
//     return axios.post("signout", null, tokenConfig());
//   },
//   getUser() {
//     console.log("토큰", tokenConfig());
//     return axios.get(`getUser`, tokenConfig());
//   },
// };

// export function createUser(data) {
//   return axios.post("signup", data);
// }
// export function authLogin(data) {
//   return axios.post("signin", data);
// }
// export function authLogout(data) {
//   return axios.post("signout", null, tokenConfig());
// }
// export function getUser(data) {
//   console.log("토큰", tokenConfig());
//   return axios.get(`getUser`, tokenConfig());
// }
