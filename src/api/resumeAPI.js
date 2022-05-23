import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  insertResume(formData) {
    return axios.post(`insertResume`, formData, tokenConfig(), {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  deleteResume(name) {
    return axios.get(`deleteResume?name=${name}`, tokenConfig());
  },
  getResume(name) {
    return axios.get(`getResume?name=${name}`);
  },
  getCreatedResumeList() {
    return axios.get(`getCreatedResumeList`, tokenConfig());
  },
};
