"use client";
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useRef } from "react";
import { useEffect } from "react";

const Page = () => {
  const animationLoading = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      animationLoading.current?.classList.add("active")
    }, 2000)
  }, [])

  return (
    <div className="loading-page" ref={animationLoading}>
      <CircularProgress />
    </div>
  )
}

export default Page