import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import "../../styles/Employee.css";

const EmployeeSignup = () => {
  const [employee, setEmployee] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("employeeData", JSON.stringify(employee));
    alert("Employee Registered Successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="signup-container">
        <Typography variant="h5">Employee Signup</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" fullWidth onChange={handleChange} required />
          <TextField label="Email" name="email" type="email" fullWidth onChange={handleChange} required />
          <TextField label="Password" name="password" type="password" fullWidth onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EmployeeSignup;

