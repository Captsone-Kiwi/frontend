import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser(data) {
    return axios.post(`signup`, data);
  },
  authLogin(data) {
    return axios.post(`signin`, data);
  },
  authLogout() {
    return axios.post(`signout`, null, tokenConfig());
  },
  getUser() {
    console.log("토큰", tokenConfig());
    return axios.get(`getUser`, tokenConfig());
  },
};
