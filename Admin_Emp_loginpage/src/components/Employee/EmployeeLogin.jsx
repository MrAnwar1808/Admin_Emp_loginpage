import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/EmployeeLogin.css";

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  useEffect(() => {
    const storedCredentials = JSON.parse(localStorage.getItem("credentials"));
    if (storedCredentials) {
      setCredentials(storedCredentials);
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = employees.find(
      (emp) => emp.email === credentials.email && emp.password === credentials.password
    );

    if (employee) {
      localStorage.setItem("credentials", JSON.stringify(credentials));
      sessionStorage.setItem("loggedEmployee", JSON.stringify(employee));
      alert("Login Successful!");
      navigate("/employee/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <Container maxWidth="lg" className="login-container">
      <Grid container spacing={2} className="login-grid">
        <Grid item xs={12} md={6} className="image-container">
          <img
            src="/images/3.jpg"
            alt="Description"
            className="login-image"
          />
        </Grid>
        <Grid item xs={12} md={6} className="form-container">
          <Paper className="form-paper">
            <Typography variant="h5" align="center" gutterBottom>
              Employee Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                margin="normal"
                required
                value={credentials.email}
                onChange={handleChange}
                className="input-field"
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                margin="normal"
                required
                value={credentials.password}
                onChange={handleChange}
                className="input-field"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="login-button"
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeeLogin;
