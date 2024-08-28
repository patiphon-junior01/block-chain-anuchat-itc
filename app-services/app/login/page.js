"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

// component import
import LoadingPage from "@/components/loading/loading"


import ServerAction from './Action';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      background: "rgb(232, 241, 250)",
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
  const form = useRef(null);
  const route = useRouter();
  const [loadingSub, setloadingSub] = useState(false)
  const handleFunctionFrom = async (formData) => {
    // console.log(formData.get("username")) // get data
    const Submit = await ServerAction(formData)
    if (Submit.status == 200) {
      route.push("/dashboard")
      alert("ล๊อกอินสำเร็จ");
      return;
    } else {
      alert(Submit?.message);
    }
  }

  return (
    <div>
      <LoadingPage />
      <div className="container-is-main">
        <div className="py-10 px-4">
          <div className="flex justify-between items-center ">
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
          </div>
          <div className="flex justify-center mt-3">
            <Typography className="text-white" component="h1" variant="h5">
              เข้าสู่ระบบ
            </Typography>
          </div>

          <form className="mt-2 " ref={form} action={handleFunctionFrom}>
            <TextField required id="outlined-basic" label="ชื่อผู้ใช้งาน" variant="outlined" name="username" className={`${classes.root} w-full mt-5`}
            />
            <TextField required id="outlined-basic" label="รหัสผ่าน" variant="outlined" name="password" type="password" className={`${classes.root} w-full mt-5`} />
            <Button variant="contained" type="submit" className="bg-white w-full mt-10 text-black p-3 rounded-xl hover:text-white" disabled={loadingSub}>เข้าสู่ระบบ</Button>
            <Button
              onClick={() => { route.push("/register") }}
              variant="contained" className="bg-white w-full mt-4 text-black p-3 rounded-xl hover:text-white">สมัครสมาชิก</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
