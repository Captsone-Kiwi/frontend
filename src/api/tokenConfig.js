export const tokenConfig = () => {
  const token = window.sessionStorage.getItem("token");
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = `JWT ${token}`;
  }
  return config;
};
