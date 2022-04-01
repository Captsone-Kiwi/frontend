import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createInterview(data) {
    return axios.post(`createInterview`, data);
  },
  getInterview() {
    console.log("토큰", tokenConfig());
    return axios.get(`getUser`, tokenConfig());
  },
};
