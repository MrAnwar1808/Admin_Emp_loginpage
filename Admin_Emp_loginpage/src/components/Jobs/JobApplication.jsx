import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import "../../styles/Jobs.css";

const JobApplication = () => {
  const [application, setApplication] = useState({ name: "", email: "", resume: "" });

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="application-container">
        <Typography variant="h5">Apply for a Job</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" fullWidth onChange={handleChange} required />
          <TextField label="Email" name="email" type="email" fullWidth onChange={handleChange} required />
          <TextField label="Resume Link" name="resume" fullWidth onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Application
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default JobApplication;
