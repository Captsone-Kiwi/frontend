import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createEvaluation(data) {
    return axios.post(`createEvaluation`, data, tokenConfig());
  },
  getEvaluationIdList() {
    return axios.get(`getEvaluationIdList`, tokenConfig());
  },
  getEvaluation(eval_id) {
    return axios.get(`getEvaluation?evaluationId=${eval_id}`);
  },
  deleteEvaluation(eval_id) {
    return axios.get(`/deleteEvaluation?evaluationId=${eval_id}`);
  },
};
