import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    
    if (employees.find((emp) => emp.email === employee.email)) {
      alert("Email already exists. Choose another one.");
      return;
    }

    const newEmployee = { id: Date.now(), ...employee };
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee Created Successfully!");
    navigate("/admin/dashboard");
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h5" align="center">Create Employee</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" required onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "10px" }}>
            Create Employee
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateEmployee;
