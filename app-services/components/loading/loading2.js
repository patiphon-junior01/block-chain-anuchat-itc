"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRef } from "react";
import { useEffect } from "react";

const Page = () => {
  const animationLoading = useRef(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        animationLoading.current?.classList.add("active");
      });
    } catch (error) {
      console.error("An error occurred while adding the class:", error);
    }
  }, []);

  return (
    <div className="loading-page" ref={animationLoading}>
      <CircularProgress />
    </div>
  );
};

export default Page;
