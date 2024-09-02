"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createWallet } from "@/plugin/API/route/createWallet";

// component import
import LoadingPage from "@/components/loading/loading";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      background: "rgb(232, 241, 250)",
      color: "#000", // Text color
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
  const [loading, setLoading] = useState(false);

  const SubmitForm = async (formData) => {
    setLoading(true);
    setTimeout(async () => {
      await handleFunctionFrom(formData)
    }, 2500)
  }

  const handleFunctionFrom = async (formData) => {
    try {

      let data = JSON.stringify({
        nameWallet: formData.get("name-wallet"),
      });
      const send = await createWallet(data);
      if (send.status) {
        alert(send?.response?.message);
        setTimeout(() => {
          setLoading(false);
          route.push("/dashboard/wallets"); // after success
        }, 2000);
        return;
      }

      setTimeout(() => {
        alert(send?.response?.message ?? "Error Create Wallet");
        setLoading(false);
      }, 2000);

    } catch (err) {
      console.error(err);
      setTimeout(() => {
        alert("Inernal Error");
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div>
      <LoadingPage />
      <div className="container-is-main">
        <div className="py-10 px-4">
          <div className="flex justify-between items-center ">
            <Avatar
              onClick={() => {
                route.push("/dashboard/wallets");
              }}
            >
              P
            </Avatar>
          </div>
          <div className="flex justify-center mt-3">
            <Typography className="text-white" component="h1" variant="h5">
              สร้างกระเป๋า
            </Typography>
          </div>

          <form className="mt-2 " ref={form} action={SubmitForm}>
            <div>
              <label htmlFor="name-wallet" className="text-white mb-0 text-lg">
                ชื่อกระเป๋า
              </label>
              <TextField
                required
                variant="outlined"
                id="name-wallet"
                name="name-wallet"
                placeholder="ชื่อกระเป๋า eg. กระเป๋าฮานี้ละ"
                className={`${classes.root} w-full mt-0`}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              className="bg-black w-full mt-10 text-white p-3 rounded-xl hover:text-black hover:bg-white"
            >
              {loading ? "กำลังสร้างกระเป๋า..." : "สร้างกระเป๋า"}
            </Button>
            <Button
              onClick={() => {
                route.back();
              }}
              size="small"
              variant="text"
              className="bg-black  mt-4 text-white p-0 px-3 rounded-xl hover:text-black hover:bg-white"
            >
              {"<-"} BACK
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
