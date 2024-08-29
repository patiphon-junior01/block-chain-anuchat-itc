"use client";
import "@/app/kxn.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import API from "@/plugin/API/API";
import { Alert } from "@mui/material";

export default function BasicSelect() {
  const [bag, setBag] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [to, setTo] = React.useState("");
  const [wallets, setWallets] = React.useState([]);
  const [userData, setUserData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchWalletData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await API.getExample.myWallet();
      if (result.status) {
        setWallets(result.response.wallet);
        setUserData(result.response.user_data);
      } else {
        setError("Failed to fetch wallet data");
      }
    } catch (error) {
      console.error("Error fetching wallet data:", error);
      setError(
        "An error occurred while fetching wallet data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await API.getExample.transfer({
        to,
        amount,
        id_wallet: bag,
      });
      if (result.status) {
        console.log("Transfer successful:", result.response);
        // Show success message
        alert("Transfer successful!");
        // Refresh wallet data
        fetchWalletData();
      } else {
        setError("Transfer failed. Please try again.");
      }
    } catch (error) {
      console.error("Transfer error:", error);
      setError("An error occurred during transfer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cs-content">
      <div className="cs-box">
        {error && <Alert severity="error">{error}</Alert>}
        <div>
          <Stack direction="row">
            <Avatar
              alt={userData?.username || "User"}
              src="/api/placeholder/56/56"
            />
          </Stack>
        </div>
        <div>
          <p className="text-name-0">ชื่อกระเป๋า</p>
        </div>

        <FormControl fullWidth className="dropdown">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bag}
            label=""
            onChange={(e) => setBag(e.target.value)}
            disabled={loading}
          >
            {wallets.map((wallet) => (
              <MenuItem key={wallet.id_wallet} value={wallet.id_wallet}>
                {`${wallet.name_wallet}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="container">
          <p className="text-name">จำนวนเหรียญ</p>
          <TextField
            className="input"
            id="amount"
            label="Amount"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="container">
          <p className="text-name-1">โอนไปยัง</p>
          <TextField
            className="input"
            id="to"
            label="To Address"
            variant="outlined"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            disabled={loading}
          />
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="btn"
          onClick={handleTransfer}
          disabled={loading}
        >
          {loading ? "Processing..." : "ยืนยัน"}
        </Button>
      </div>
    </div>
  );
}
