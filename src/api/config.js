import axios from "axios";

//EDIT
axios.defaults.baseURL = "http://[API Sever Ip]:8000/";

// axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
// axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

export default axios;
