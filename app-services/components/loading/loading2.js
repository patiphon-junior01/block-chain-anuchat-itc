"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRef } from "react";
import { useEffect } from "react";

const Page = ({ loadingBool = false }) => {
  const animationLoading = useRef(null);

  return (
    <div className={`loading-page ${loadingBool ? "active" : ''}`} ref={animationLoading}>
      <CircularProgress />
    </div>
  );
};

export default Page;
