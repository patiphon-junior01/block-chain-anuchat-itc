import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
// console.log(process.env.BASEURL)

const Axios = axios.create({
  baseURL: process.env.BASEURL ?? "http://localhost:3005"
});
Axios.defaults.timeout = 2500;

export default Axios;
