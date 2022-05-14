import axios from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  insertResume(data) {
    return axios.post(`insertResume`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getResume(name) {
    return axios.get(`/getResume?name=${name}`);
  },
};
