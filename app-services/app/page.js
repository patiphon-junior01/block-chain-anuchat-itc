import "@/app/asset/css/pol/pol.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import { LocalMallIcon, AddBoxIcon } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ImportExportIcon from "@mui/icons-material/ImportExport";

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
        <div className="card">
          <div className="card-1">
            <div className="col6">ชื่อผู้ใช้ : </div>
            <div className="col6">Token : </div>
          </div>
        </div>
        <div className="box-1">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="outlined"
              color="error"
              sx={{ borderRadius: "50px", padding: "12px", color: "red" }}
            >
              <LocalMallIcon sx={{ fontSize: 35 }} />
            </Button>
            <div>กระเป๋า</div>
          </Stack>
        </div>
        <div className="box-1">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px", padding: "12px" }}
            >
              <AddBoxIcon sx={{ fontSize: 35 }} />
            </Button>
            <div>เพิ่มกระเป๋า</div>
          </Stack>
        </div>
        <div className="box-1">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="outlined"
              color="success"
              sx={{ borderRadius: "50px", padding: "12px" }}
            >
              <ImportExportIcon sx={{ fontSize: 35 }} />
            </Button>
            <div>โอนเหรียญ</div>
          </Stack>
        </div>
      </div>
    </div>
  );
}
