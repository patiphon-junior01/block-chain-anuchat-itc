"use client";
import "@/app/asset/css/pong/style.css"
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from "@mui/material";

// component import
import LoadingPage from "@/components/loading/loading"

export default function Page() {
  const route = useRouter();

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
            <p className="mb-3"><span className="font-normal text-slate-400">Token (LineaETH) :</span> <span className="font-medium ">{"1000.00"}</span></p>
            <p className="mb-0"><span className="font-normal text-slate-400">Token (ITC) :</span> <span className="font-medium ">{"1000.00"}</span></p>
          </div>

          {/* wallets list */}
          <div className="flex flex-wrap gap-5 justify-between  mb-30">

            {/* loop data with map function */}
            <div className="card-wallet flex-1  min-w-40 max-h-40 max-w-44  text-center no-select cursor-is hover:scale-105 transition">
              <div className="bg-white w-full  rounded-lg mb-2 p-3 py-4 text-left">
                <p className="mb-0"><span className="font-normal text-slate-400">(ITC) :</span> <span className="font-medium ">{"1000.00"}</span></p>
                <p className="mb-2"><span className="font-normal text-slate-400">(LineaETH) :</span> <span className="font-medium ">{"1000.00"}</span></p>
                <div className="text-right">
                  <button type="button" variant="text" className="button-no-bg p-0 m-0  text-sky-600" onClick={() => { copyText("address wallet") }}><ContentCopyIcon /></button>
                  {/* คลิ๊กที่โอนเเล้วให้ไปหน้าโอนเเละเลือกรายการกระเป๋านี้เลย */}
                  <button type="button" variant="text" className="button-no-bg p-0 m-0 ms-2 text-sky-600" onClick={() => { route.push(`/dashboard/wallets/tranfer?walletId=${2}`) }}><ImportExportIcon /></button>
                </div>
              </div>
              <h2 className="text-lg text-white">Name Wallet</h2>
            </div>

          </div>
          {/* wallets list */}

          <div className="bottom-menu p-4 lg:p-3 px-1 bg-white rounded-3xl w-10/12 ">
            <div className="mb-0 menu-selected-v2 flex flex-col gap-3 justify-center items-center " onClick={() => { route.push("/dashboard/wallets") }}>
              <div className="icon-das-v2 text-center">
                <ShoppingBagIcon sx={{ fontSize: 25 }} />
              </div>
              <h1 className="text-sky-600 mb-0 text-sm md:text-md mx-3 md:mx-2 text-center">กระเป๋าของฉัน</h1>
            </div>
            <div className="mb-0 menu-selected-v2 flex flex-col gap-2 justify-center items-center" onClick={() => { route.push("/dashboard/wallets/create") }}>
              <div className="icon-das-v2 text-center">
                <CreateNewFolderIcon sx={{ fontSize: 25 }} />
              </div>
              <h1 className="text-sky-600 mb-0 text-sm md:text-md mx-3 md:mx-2 text-center">สร้างกระเป๋า</h1>
            </div>
            <div className="mb-0 menu-selected-v2 flex flex-col gap-2 justify-center items-center" onClick={() => { route.push("/dashboard/wallets/tranfer") }}>
              <div className="icon-das-v2 text-center">
                <ImportExportIcon sx={{ fontSize: 25 }} />
              </div>
              <h1 className="text-sky-600 mb-0 text-sm md:text-md mx-3 md:mx-2 text-center">โอนเหรียญ</h1>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}


function copyText(text) {
  // Check if the Clipboard API is supported
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
      alert('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  } else {
    // Fallback for older browsers
    let textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      alert('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textarea);
  }
}