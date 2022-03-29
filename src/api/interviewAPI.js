import axios from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getInterview(ed) {
    return axios.get(`getInterview/?interviewer=${ed}`);
  },
  createInterview(data) {
    return axios.post(`createInterview`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
