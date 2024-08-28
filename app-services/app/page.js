"use client";
import * as React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {
  const route = useRouter();

  // ตอนนี้เขียนเเบบนี้ไปก่อนถ้า connect API เเล้วค่อยเปลี่ยนการ redirect ไปที่ dashboard 
  useEffect(() => {
    setTimeout(() => {
      route.push("/login")
    }, 3000)
  }, [])

  return (
    <div className="w-100 flex justify-center min-h-screen items-center animate-pulse">
      <CircularProgress style={{ color: "#fff", width: "50px", height: "50px" }} />
    </div>
  );
}
