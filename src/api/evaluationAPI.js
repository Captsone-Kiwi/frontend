import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createEvaluation(data) {
    return axios.post(`createEvaluation`, data);
  },
};