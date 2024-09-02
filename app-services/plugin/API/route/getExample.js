"use server"

import Axios from "../Init"; // นำเข้า Axios โดยตรง
import { GetCookie } from "@/controller/auth/index";


const transfer = async (data) => {
  const ck = await GetCookie();
  console.log(ck?.value); // token from cookie for verify

  try {
    const response = await Axios.post(
      "/api/wallet/transfer",
      data,
      {
        headers: {
          Authorization: `Bearer ${ck?.value}`,
          "Content-Type": "application/json",
        },
      }
    );

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

const myWallet = async () => {
  const ck = await GetCookie();
  // console.log(ck?.value); // token from cookie for verify

  try {
    const response = await Axios.get("/api/wallet/my-wallet", {
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

export { transfer, myWallet }; // ส่งออกเป็นอ็อบเจ็กต์
