"use server"
// process.env.BASEURL
import { cookies } from "next/headers";
import "dotenv/config";


export async function GetCookie() {
  const token = cookies().get("LoginToken");
  return token;
}