"use server";

import Axios from "../Init"; // นำเข้า Axios โดยตรง
import { GetCookie } from "@/controller/auth/index";

const createWallet = async (data) => {
  const ck = await GetCookie();

  try {
    const response = await Axios.post(
      "/api/wallet/create-wallet",
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

export { createWallet }; // ส่งออกเป็นอ็อบเจ็กต์
