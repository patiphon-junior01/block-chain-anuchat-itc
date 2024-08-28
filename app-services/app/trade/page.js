"use client";
import "@/app/kxn.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import { LocalMallIcon, AddBoxIcon } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function BasicSelect() {
    const [bag, setBag] = React.useState('');

    const handleChange = (event) => {
        setBag(event.target.value);
    };

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
                <div>
                <p className="text-name-0">ชื่อกระเป๋า</p>
                </div>
                 
                    <FormControl  fullWidth className="dropdown">
                        
                        <Select
                            
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={bag}
                            label=""
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>กระเป๋า1</MenuItem>
                            <MenuItem value={2}>กระเป๋า2</MenuItem>
                            <MenuItem value={3}>กระเป๋า3</MenuItem>
                            <MenuItem value={4}>กระเป๋า4</MenuItem>
                            <MenuItem value={5}>กระเป๋า5</MenuItem>
                            <MenuItem value={6}>กระเป๋า6</MenuItem>
                        </Select>
                    </FormControl>
                
                <div className="container">
                    <p className="text-name">จำนวนเหรียญ</p>
                    <TextField className="input" id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className="container">
                    <p className="text-name-1">โอนไปยัง</p>
                    <TextField className="input" id="outlined-basic" label="Outlined" variant="outlined" />
                </div>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className="btn"
                >
                    ยืนยัน
                </Button>
            </div>
        </div>
    );
}



