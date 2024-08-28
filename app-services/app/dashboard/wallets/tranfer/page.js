"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";

// component import
import LoadingPage from "@/components/loading/loading"

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "0px",
    "& .MuiInputBase-root": {
      background: "rgb(232, 241, 250) !important",
      color: "#000",  // Text color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "#000", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000", // Border color when focused
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000", // Label color when focused
    },
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "0px",
    background: "rgb(232, 241, 250) !important",
    "& .MuiInputBase-root": {
      background: "rgb(232, 241, 250) !important",
      color: "#000",  // Text color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "#000", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000", // Border color when focused
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000", // Label color when focused
    },
  },
}));

export default function Page() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const form = useRef(null);
  const route = useRouter();
  const searchParams = useSearchParams()

  // state data
  const [Wallet, setWallet] = useState(1);

  const handleChange = (event) => {
    setWallet(event.target.value);
  };

  useEffect(() => {
    const walletId = searchParams.get('walletId')
    if (walletId) {
      setWallet(walletId) // set Default data
    }
  }, [])

  const handleFunctionFrom = async (formData) => {
    console.log(formData.get("name-wallet")) // get data
    route.push("/dashboard/wallets") // after success
  }


  return (
    <div>
      <LoadingPage />
      <div className="container-is-main">
        <div className="py-10 px-4">
          <div className="flex justify-between items-center ">
            <Avatar onClick={() => { route.push("/dashboard/wallets") }}>
              P
            </Avatar>
          </div>
          <div className="flex justify-center mt-3">
            <Typography className="text-white" component="h1" variant="h5">
              โอนเหรียญ
            </Typography>
          </div>

          <form className="mt-2 " ref={form} action={handleFunctionFrom}>
            <div className="mb-5">
              <label htmlFor="name-wallet" className="text-white mb-0 text-lg">ชื่อกระเป๋า</label>
              <div>
                <Select
                  className={classes2.root}
                  value={Wallet}
                  label=""
                  onChange={handleChange}
                  name="name-wallet"
                >
                  <MenuItem value={1}>ชื่อกระเป๋า 1</MenuItem>
                  <MenuItem value={2}>ชื่อกระเป๋า 2</MenuItem>
                  <MenuItem value={3}>ชื่อกระเป๋า 3</MenuItem>
                </Select>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="amount" className="text-white mb-0 text-lg">จำนวนเหรียญ</label>
              {/* เพิ่ม handle จำนวนมากสุดที่ใส่ได้ */}
              <TextField required variant="outlined" id="amount" name="amount" type="number" step={0.00001} placeholder="จำนวนเหรียญ eg. 100" className={classes.root}
              />
            </div>
            <div className="">
              <label htmlFor="name-to" className="text-white mb-0 text-lg">โอนไปยัง</label>
              <TextField required variant="outlined" id="name-to" name="name-to" placeholder="โอนไปยัง eg. 000xxx123cnsdc" className={classes.root}
              />
            </div>
            <Button variant="contained" type="submit" className="bg-black w-full mt-10 text-white p-3 rounded-xl hover:text-black hover:bg-white">ยืนยัน</Button>
            <Button
              onClick={() => { route.back() }}
              size="small"
              variant="text" className="bg-black  mt-4 text-white p-0 px-3 rounded-xl hover:text-black hover:bg-white">{"<-"} BACK</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
