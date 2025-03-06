
import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Grid } from "@mui/material";

const CreateProject = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProjects = JSON.parse(sessionStorage.getItem("projects")) || [];
    sessionStorage.setItem("projects", JSON.stringify([...existingProjects, project]));
    alert("Project Created Successfully!");
    setProject({ name: "", description: "", startDate: "", endDate: "" });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create Project
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Project Name" name="name" value={project.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" name="description" value={project.description} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="date" name="startDate" value={project.startDate} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="date" name="endDate" value={project.endDate} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Create Project
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateProject;
