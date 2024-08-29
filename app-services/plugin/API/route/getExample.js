import Axios from "../Init"; // นำเข้า Axios โดยตรง
import { GetCookie } from "@/controller/auth/index";

const getExampleApi = async (params) => {
  // const ck = cookies().get("LoginToken")
  const ck = await GetCookie();
  // console.log(ck?.value) // token from cookie for verify

  try {
    const response = await Axios.get("/api/test-api/test", { params }); // ใช้ params
    console.log("Response:", response.data);
    return { status: true, response: response.data };
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    return {
      status: false,
      response: error.response ? error.response.data : error.message,
    };
  }
};

const transfer = async (params) => {
  const ck = await GetCookie();
  console.log(ck?.value); // token from cookie for verify

  try {
    const response = await Axios.put("/api/wallet/transfer", {
      params,
      headers: {
        Authorization: `Bearer ${ck?.value}`,
      },
    });
    console.log("Response:", response.data);
    return { status: true, response: response.data };
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    return {
      status: false,
      response: error.response ? error.response.data : error.message,
    };
  }
};

const myWallet = async (params) => {
  const ck = await GetCookie();
  console.log(ck?.value); // token from cookie for verify

  try {
    const response = await Axios.get("/api/wallet/my-wallet", {
      params,
      headers: {
        Authorization: `Bearer ${ck?.value}`,
      },
    });
    console.log("Response:", response.data);
    return { status: true, response: response.data };
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    return {
      status: false,
      response: error.response ? error.response.data : error.message,
    };
  }
};

export default { getExampleApi, transfer, myWallet }; // ส่งออกเป็นอ็อบเจ็กต์
