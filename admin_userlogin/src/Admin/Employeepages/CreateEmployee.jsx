

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Grid } from "@mui/material";
import "./CreateEmployee.css";


const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const storedEmployees = JSON.parse(sessionStorage.getItem("employees")) || [];
    
   
    const updatedEmployees = [...storedEmployees, employee];

  
    sessionStorage.setItem("employees", JSON.stringify(updatedEmployees));

    console.log("Employee Created:", employee);
    
    
    setEmployee({ name: "", email: "", position: "", department: "" });
  };

  return (
    <Container maxWidth="sm" style={{color:"linear-gradient(to right, #74ebd5, #acb6e5);"}}>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" name="name" value={employee.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" name="email" type="email" value={employee.email} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Position" name="position" value={employee.position} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Department" name="department" value={employee.department} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Create Employee
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateEmployee;
