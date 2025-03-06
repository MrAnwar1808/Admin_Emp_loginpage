import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom"; 

const Navbar = () => {
  const [adminAnchor, setAdminAnchor] = useState(null);
  const [employeeAnchor, setEmployeeAnchor] = useState(null);
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
          Job Management System
        </Typography>

       
        <Button color="inherit" onClick={(e) => setAdminAnchor(e.currentTarget)}>
          Admin
        </Button>
        <Menu anchorEl={adminAnchor} open={Boolean(adminAnchor)} onClose={() => setAdminAnchor(null)}>
          <MenuItem onClick={() => navigate("/admin/login")}>Login</MenuItem>
          <MenuItem onClick={() => navigate("/admin/signup")}>Signup</MenuItem>
        </Menu>

        
        <Button color="inherit" onClick={(e) => setEmployeeAnchor(e.currentTarget)}>
          Employee
        </Button>
        <Menu anchorEl={employeeAnchor} open={Boolean(employeeAnchor)} onClose={() => setEmployeeAnchor(null)}>
          <MenuItem onClick={() => navigate("/employee/login")}>Login</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
