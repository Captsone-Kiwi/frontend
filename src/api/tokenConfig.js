export const tokenConfig = () => {
  const token = window.sessionStorage.getItem("token");
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    //헤더설정
    config.headers["X-AUTH-TOKEN"] = `${token}`;
  }
  return config;
};
