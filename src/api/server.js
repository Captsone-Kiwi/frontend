// export async function createUser(fields) {
//   console.log(fields);
//   let data = JSON.stringify({
//     name: fields.name,
//     email: fields.email,
//     password: fields.password,
//   });

//   // const response = await fetch("http://localhost:8000/signup", {
//   await fetch("http://localhost:8000/signup", {
//     method: "POST",
//     mode: "no-cors",
//     body: data,
//     headers: {
//       "Content-Type": "application/json",
//       "Content-Length": data.length,
//       "Access-Control-Allow-Origi": "*",
//       Accept: "*/*",
//       Connection: "keep-alive",
//     },
//   }).then(async function (data) {
//     await alert(data.json());
//   });
//   // return await response.json();
//   return null;
// }

export async function createUser(fields) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: "test",
    email: "test",
    password: "1234",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    mode: "no-cors",
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8000/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// export async function createUser(fields) {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify({
//     name: "test",
//     email: "test",
//     password: "1234",
//   });

//   var requestOptions = {
//     method: "POST",
//     mode: "no-cors",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   const result = await fetch(
//     "http://localhost:8000/signup",
//     requestOptions
//   ).then((response) => response.text());
//   // .then((result) => console.log(result))
//   // .catch((error) => console.log("error", error));
//   return result;
// }

// export function createUser(fields) {
//   console.log(fields);
//   const response = fetch("http://localhost:8000/signup", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: fields.name,
//       email: fields.email,
//       password: fields.password,
//     }),
//   });
//   return response.json();
// }

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
