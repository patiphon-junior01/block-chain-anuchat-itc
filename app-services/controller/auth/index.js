"use server"
// process.env.BASEURL
import { cookies } from "next/headers";
import "dotenv/config";


export async function GetCookie() {
  const token = cookies().get("LoginToken");
  return token;
}

export const Logout = async () => {
  cookies().delete('LoginToken')
  return true
}
