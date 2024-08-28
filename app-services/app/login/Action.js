'use server'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import 'dotenv/config'
var baseUrl = process.env.BASEURL || '';

const ServerAction = async (formData) => {
  try {
    let data
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": formData.get("username"),
      "password": formData.get("password")
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const res = await fetch(`${baseUrl}/api/login`, requestOptions)
    const res_data = await res.json();

    data = res_data;
    let message = '';
    if (res.status == 200) {
      // secure: process.env.NODE_ENV === "production",
      cookies().set({
        name: 'LoginToken',
        value: res_data.token,
        maxAge: 24 * 60 * 60,
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + 60 * 60 * 24),
      })
    } else {
      return { message: data?.message, status: 400 };
    }

    return { message: 'ล็อกอินสำเร็จ', status: 200 };
  } catch (e) {
    console.log(e)
    return { message: "ล็อกอินไม่สำเร็จ Internal Error", status: 500 };
  }
}

export default ServerAction