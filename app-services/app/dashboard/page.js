"use client";
import "@/app/asset/css/pong/style.css"
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ImportExportIcon from '@mui/icons-material/ImportExport';

// component import
import LoadingPage from "@/components/loading/loading"

export default function Page() {
  const route = useRouter();

  const handleFunctionFrom = async (formData) => {
    console.log(formData.get("username")) // get data
  }

  return (
    <div>
      <LoadingPage />
      <div className="container-is-main">
        <div className="py-10 px-4">
          <div className="flex justify-between items-center mb-10">
            <Avatar onClick={() => { route.push("/dashboard") }}>
              P
            </Avatar>
          </div>
          <div className="w-full bg-white px-8 py-6 rounded-xl mb-10">
            <p className="mb-3"><span className="font-normal text-slate-400">ชื่อผู้ใช้  : </span> <span className="font-medium ">{"Username"}</span></p>
            <p className="mb-3"><span className="font-normal text-slate-400">Token (LineaETH) :</span> <span className="font-medium ">{"1000.00"}</span></p>
            <p className="mb-0"><span className="font-normal text-slate-400">Token (ITC) :</span> <span className="font-medium ">{"1000.00"}</span></p>
          </div>

          <div className="mb-8 menu-selected flex items-center" onClick={() => { route.push("/dashboard/wallets") }}>
            <div className="icon-das text-center">
              <ShoppingBagIcon sx={{ fontSize: 35 }} />
            </div>
            <h1 className="text-white text-2xl ms-5">กระเป๋าของฉัน</h1>
          </div>
          <div className="mb-8 menu-selected flex items-center" onClick={() => { route.push("/dashboard/wallets/create") }}>
            <div className="icon-das text-center">
              <CreateNewFolderIcon sx={{ fontSize: 35 }} />
            </div>
            <h1 className="text-white text-2xl ms-5">สร้างกระเป๋า</h1>
          </div>
          <div className="mb-8 menu-selected flex items-center" onClick={() => { route.push("/dashboard/wallets/tranfer") }}>
            <div className="icon-das text-center">
              <ImportExportIcon sx={{ fontSize: 45 }} />
            </div>
            <h1 className="text-white text-2xl ms-5">โอนเหรียญ</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
