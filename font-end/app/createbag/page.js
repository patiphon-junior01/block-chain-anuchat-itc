import "@/app/kxn.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import { LocalMallIcon, AddBoxIcon } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import TextField from '@mui/material/TextField';

export default function Home() {
    return (
        <div className="cs-content">
            <div className="cs-box">
                <div>
                    <Stack direction="row">
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                        />
                    </Stack>
                </div>
                <div className="container">
                    <p className="text">สร้างกระเป๋า</p>
                </div>
                <div className="container">
                    <p className="text-name">ชื่อกระเป๋า</p>
                    <TextField className="input" id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className="btn"
                >
                    สร้างกระเป๋า
                </Button>
            </div>
        </div>
    );
}
