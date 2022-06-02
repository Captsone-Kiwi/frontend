import axios from "axios";

// axios.defaults.baseURL = "http://35.174.145.15:8000/";
axios.defaults.baseURL = "http://localhost:8000/";
//EDIT
// axios.defaults.baseURL = "http://[API Sever Ip]:8000/";

// axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
// axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

export default axios;
