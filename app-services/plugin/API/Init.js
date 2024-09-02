import axios from "axios";

// console.log(process.env.BASEURL);
// "http://localhost:3005"
const Axios = axios.create({
  baseURL:
<<<<<<< HEAD
    process.env.BASEURL || "https://api-itcmcoin-dev.product-services.com",
=======
    process.env.BASEURL,
>>>>>>> 7914587a9cf70d163deaedc75ad5fff9f831a229
});
Axios.defaults.timeout = 25000;

export default Axios;
