import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Paper, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";

const AdminSignup = () => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem("adminData"));
    if (storedAdmin) setAdmin(storedAdmin);
  }, []);

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!admin.name.trim()) newErrors.name = "Name is required.";
    if (!admin.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!admin.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!validatePassword(admin.password)) newErrors.password = "Password must be at least 6 characters.";
    if (admin.password !== admin.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    sessionStorage.setItem("adminData", JSON.stringify(admin));
    localStorage.setItem("adminData", JSON.stringify(admin));

    alert("Admin Registered Successfully!");
    navigate("/admin/login");
  };

  return (
    <Container maxWidth="lg" className="signup-container">
      <Paper elevation={6} className="signup-paper">
        <Grid container>
          
          <Grid item xs={12} md={6} className="image-container">
            <img src="/images/1.jpg" alt="Company Logo" className="company-image" />
          </Grid>

          
          <Grid item xs={12} md={6} className="form-container">
            <Box className="form-box">
              <Typography variant="h4" align="center" className="signup-title">
                Admin Signup
              </Typography>
              <Typography variant="subtitle1" align="center" className="signup-subtitle">
                Create an admin account to manage the system.
              </Typography>

              <form onSubmit={handleSubmit} className="signup-form">
                <TextField label="Full Name" fullWidth value={admin.name} onChange={(e) => setAdmin({ ...admin, name: e.target.value })} required error={!!errors.name} helperText={errors.name} className="input-field" />
                <TextField label="Email" type="email" fullWidth value={admin.email} onChange={(e) => setAdmin({ ...admin, email: e.target.value })} required error={!!errors.email} helperText={errors.email} className="input-field" />
                <TextField label="Phone Number" type="tel" fullWidth value={admin.phone} onChange={(e) => setAdmin({ ...admin, phone: e.target.value })} required error={!!errors.phone} helperText={errors.phone} className="input-field" />
                <TextField label="Password" type="password" fullWidth value={admin.password} onChange={(e) => setAdmin({ ...admin, password: e.target.value })} required error={!!errors.password} helperText={errors.password} className="input-field" />
                <TextField label="Confirm Password" type="password" fullWidth value={admin.confirmPassword} onChange={(e) => setAdmin({ ...admin, confirmPassword: e.target.value })} required error={!!errors.confirmPassword} helperText={errors.confirmPassword} className="input-field" />

                <Box textAlign="center" mt={2}>
                  <Button type="submit" variant="contained" color="primary" fullWidth className="submit-button">
                    Signup
                  </Button>
                </Box>
              </form>

              <Typography variant="body2" align="center" className="login-text">
                Already have an account?{" "}
                <span className="login-link" onClick={() => navigate("/admin/login")}>
                  Login Here
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminSignup;
