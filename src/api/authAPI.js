export function createUser(fields) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: fields.name,
    email: fields.email,
    password: fields.password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch("http://localhost:8000/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log("result", result))
    .catch((error) => console.log("error", error));
  return result;
}

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
    .then((result) => console.log("result", result))
    .catch((error) => console.log("error", error));
  return result;
}

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
