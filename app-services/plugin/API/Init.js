import axios from "axios";

// console.log(process.env.BASEURL);
// "http://localhost:3005"
const Axios = axios.create({
  baseURL:
    process.env.BASEURL || "https://api-itcmcoin-dev.product-services.com",
});
Axios.defaults.timeout = 2500;

export default Axios;
