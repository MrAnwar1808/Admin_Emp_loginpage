import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [job, setJob] = useState({ title: "", company: "", location: "", salary: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    navigate("/admin/dashboard"); 
  };

  return (
    <Container>
      <Typography variant="h4">Post a Job</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Job Title" name="title" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Company" name="company" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Location" name="location" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Salary" name="salary" fullWidth margin="normal" onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">
          Post Job
        </Button>
      </form>
    </Container>
  );
};

export default PostJob;
