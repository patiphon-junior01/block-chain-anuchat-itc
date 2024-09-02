"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { myWallet, transfer } from "@/plugin/API/route/getExample";
import { Alert } from "@mui/material";

// component import
import LoadingPage from "@/components/loading/loading2";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      background: "rgb(232, 241, 250) !important",
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

const useStyles2 = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "rgb(232, 241, 250) !important",
    "& .MuiInputBase-root": {
      background: "rgb(232, 241, 250) !important",
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
  const classes2 = useStyles2();
  const form = useRef(null);
  const route = useRouter();
  const searchParams = useSearchParams();

  // state data
  const [bag, setBag] = React.useState("");
  const [amount, setAmount] = React.useState(0.00001);
  const [to, setTo] = React.useState("");
  const [wallets, setWallets] = React.useState([]);
  const [userData, setUserData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loadingWallet, setloadingWallet] = React.useState(false);


  React.useEffect(() => {
    fetchWalletData();
    const walletId = searchParams.get('walletId')
    if (walletId) {
      setBag(walletId)
    }
  }, []);

  const fetchWalletData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await myWallet();
      if (result.status) {
        setWallets(result.response.wallet);
        setUserData(result.response.user_data);
      } else {
        setError("Failed to fetch wallet data");
      }
      setloadingWallet(true)
    } catch (error) {
      console.error("Error fetching wallet data:", error);
      setError(
        "An error occurred while fetching wallet data. Please try again."
      );
      setloadingWallet(true)
    } finally {
      setloadingWallet(true)
      setLoading(false);
    }
  };

  const handleTransfer = async () => {

    // validate fields
    if (!to || !amount || !bag) {
      setError("Please Enter Value");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await transfer({
        to,
        amount,
        id_wallet: bag,
      });

      console.log(result)

      if (result.status) {
        console.log("Transfer successful:", result.response);
        // Show success message
        alert("Transfer successful!");
        // Refresh wallet data
      } else {
        setError(result?.response?.message ?? "Transfer error");
      }
      setTo(null)
      setAmount(null)
    } catch (error) {
      console.error("Transfer error:", error);
      setError("An error occurred during transfer. Please try again.");
      setTo(null)
      setAmount(null)
    } finally {
      setTo(null)
      setAmount(null)
      form?.current?.reset();
    }
  };

  const handleFunctionFrom = async (formData) => {
    console.log(formData.get("name-wallet")); // get data
    route.push("/dashboard/wallets"); // after success
  };

  return (
    <div>
      <LoadingPage loadingBool={loadingWallet} />
      <div className="container-is-main">
        <div className="py-10 px-4">
          {error && <Alert severity="error" className="mb-3">{error}</Alert>}
          <div className="flex justify-between items-center ">
            <Avatar
              alt={userData?.username || "User"}
              onClick={() => {
                route.push("/dashboard/wallets");
              }}
            >
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
              <label htmlFor="name-wallet" className="text-white mb-0 text-lg">
                ชื่อกระเป๋า
              </label>
              <div>
                <Select
                  className={`${classes2.root} w-full mt-0`}
                  value={bag}
                  label=""
                  onChange={(e) => setBag(e.target.value)}
                  name="name-wallet"
                  disabled={loading}
                >
                  <MenuItem value="" disabled>**โปรดเลือกรายการ**</MenuItem>
                  {wallets.map((wallet) => (
                    <MenuItem
                      key={wallet.id_wallet}
                      value={wallet.id_wallet}
                      disabled={wallet?.ITC <= 0.00000}
                    >{`${wallet.name_wallet}`} {`ITC : ${wallet?.ITC}`}</MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="amount" className="text-white mb-0 text-lg">
                จำนวนเหรียญ
              </label>
              {/* เพิ่ม handle จำนวนมากสุดที่ใส่ได้ */}
              <TextField
                required
                variant="outlined"
                id="amount"
                name="amount"
                type="number"
                step={0.00001}
                placeholder="จำนวนเหรียญ eg. 100"
                className={`${classes.root} w-full mt-0`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="">
              <label htmlFor="name-to" className="text-white mb-0 text-lg">
                โอนไปยัง
              </label>
              <TextField
                required
                variant="outlined"
                id="name-to"
                name="name-to"
                placeholder="โอนไปยัง eg. 000xxx123cnsdc"
                className={`${classes.root} w-full mt-0`}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                disabled={loading}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              className="bg-black w-full mt-10 text-white p-3 rounded-xl hover:text-black hover:bg-white"
              onClick={handleTransfer}
              disabled={loading}
            >
              {loading ? "กำลังทำรายการ" : "ยืนยัน"}
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
