import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Grid } from "@mui/material";
import "./CreateEmployee.css"; // Import the CSS file
import Sidebar from "../../components/Admin/Sidebar";

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    password: "", // Add password to the state
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmployees = JSON.parse(sessionStorage.getItem("employees")) || [];
    const updatedEmployees = [...storedEmployees, employee];

    // Store in session storage
    sessionStorage.setItem("employees", JSON.stringify(updatedEmployees));
    
    // Store in local storage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    console.log("Employee Created:", employee);
    
    // Reset form fields
    setEmployee({ name: "", email: "", position: "", department: "", password: "" });
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <Container maxWidth="md" className="container" style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
        <div className="form-wrapper">
          <Paper elevation={3} className="paper">
            <Typography variant="h5" align="center" gutterBottom>
              Create Employee
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={employee.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Position"
                    name="position"
                    value={employee.position}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password" // Use password input type
                    value={employee.password}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Create Employee
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default CreateEmployee;
