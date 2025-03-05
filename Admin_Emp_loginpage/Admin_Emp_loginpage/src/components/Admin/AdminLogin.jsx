import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminLogin.css";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedAdmin = JSON.parse(sessionStorage.getItem("adminData"));
    if (storedAdmin && storedAdmin.email === admin.email && storedAdmin.password === admin.password) {
      alert("Login Successful!");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid Credentials. Please check your email and password.");
    }
  };

  return (
    <Container maxWidth="lg" className="login-container">
      <Paper elevation={6} className="login-paper">
        <Grid container>
          
          <Grid item xs={12} md={6} className="image-container">
            <img src="/images/2.jpg" alt="Admin Login" className="login-image" />
          </Grid>

         
          <Grid item xs={12} md={6} className="form-container">
            <Box className="form-box">
              <Typography variant="h4" align="center" className="login-title">
                Welcome Back, Admin!
              </Typography>
              <Typography variant="subtitle1" align="center" className="login-subtitle">
                Please enter your credentials to access the admin panel.
              </Typography>

              {error && <Typography className="error-message">{error}</Typography>}

              <form onSubmit={handleSubmit} className="login-form">
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={admin.email}
                  onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
                  required
                  className="input-field"
                />
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  value={admin.password}
                  onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
                  required
                  className="input-field"
                />

                <Box textAlign="center" mt={2}>
                  <Button type="submit" variant="contained" color="primary" fullWidth className="submit-button">
                    Login
                  </Button>
                </Box>
              </form>

              <Typography variant="body2" align="center" className="forgot-password">
                Forgot Password? <span className="forgot-link">Reset here</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
