import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Resume(name) {
    console.log("토큰", tokenConfig());
    return axios.get(`getResume?name=${name}`);
  },
};
