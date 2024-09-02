'use server'

import { cookies } from 'next/headers'
import 'dotenv/config'

const baseUrl = process.env.BASEURL || '';

const ServerAction = async (formData) => {
  debugger
  try {
    // ตรวจสอบว่า formData มีข้อมูลครบถ้วนหรือไม่
    const username = formData.get("username");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");

    if (!username || !password || !firstname || !lastname) {
      return { message: "กรุณากรอกข้อมูลให้ครบถ้วน", status: 400 };
    }

    // เตรียมข้อมูลคำขอ
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username,
      password,
      firstname,
      lastname
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    // ส่งคำขอไปยัง API
    const res = await fetch(`${baseUrl}/api/register`, requestOptions);
    const res_data = await res.json();

    // ตรวจสอบสถานะการตอบกลับจาก API
    if (res.ok) {
      // เก็บโทเค็นลงในคุกกี้ถ้าการสมัครสมาชิกสำเร็จ
      cookies().set({
        name: 'LoginToken',
        value: res_data.token,
        maxAge: 24 * 60 * 60, // 1 วัน
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000) // ตั้งค่าอายุการใช้งานคุกกี้เป็น 1 วัน
      });

      return { message: 'สมัครสมาชิกสำเร็จ', status: 200 };
    } else {
      // ส่งคืนข้อความผิดพลาดจาก API ถ้าการสมัครสมาชิกไม่สำเร็จ
      return { message: res_data.message || 'เกิดข้อผิดพลาดในการสมัครสมาชิก', status: res.status };
    }
  } catch (e) {
    console.error("Error in ServerAction:", e);
    return { message: "สมัครสมาชิกไม่สำเร็จ Internal Error", status: 500 };
  }
}

export default ServerAction;
