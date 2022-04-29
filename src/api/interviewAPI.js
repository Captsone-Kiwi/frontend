import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createInterview(data) {
    console.log("토큰", tokenConfig());
    return axios.post(`createInterview`, data, tokenConfig());
  },
  getInterview() {
    return axios.get(`getInterview`, tokenConfig());
  },
  participant(id) {
    return axios.get(`/participant?id=${id}`);
  },
  deleteInterview(id) {
    return axios.get(`/deleteInterview?id=${id}`);
  },
};
