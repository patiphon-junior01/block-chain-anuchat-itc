import axios from "axios";

// console.log(process.env.BASEURL);
// "http://localhost:3005"
const Axios = axios.create({
  baseURL: process.env.BASEURL,
});
Axios.defaults.timeout = 25000;

export default Axios;
