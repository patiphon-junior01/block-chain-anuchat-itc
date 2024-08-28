"use client";
import React from 'react'
import { useState, useEffect } from 'react';

// get api import
import API from "@/plugin/API/API"

export default function page() {

  useEffect(() => {
    const fetch = async () => {
      const data = await API?.getExample?.getExampleApi({ id: 1 })
    }

    fetch()
  }, [])

  return (
    <div className='w-full h-screen flex items-center justify-center text-white text-lg'>Test GET API Example</div>
  )
}
