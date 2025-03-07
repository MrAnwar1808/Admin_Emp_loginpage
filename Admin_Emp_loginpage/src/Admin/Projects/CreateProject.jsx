import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import Sidebar from "../../components/Admin/Sidebar";

const CreateProject = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    type: "",       // New field for project type
    status: "",     // New field for project status
    budget: "",     // New field for budget
    priority: "",   // New field for priority
    comments: "",   // New field for comments
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({ ...prevProject, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProjects = JSON.parse(sessionStorage.getItem("projects")) || [];
    sessionStorage.setItem("projects", JSON.stringify([...existingProjects, project]));
    alert("Project Created Successfully!");
    setProject({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      type: "",
      status: "",
      budget: "",
      priority: "",
      comments: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5" align="center" gutterBottom>
              Create Project
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    name="name"
                    value={project.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    type="date"
                    name="startDate"
                    value={project.startDate}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="End Date"
                    type="date"
                    name="endDate"
                    value={project.endDate}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Project Type"
                    name="type"
                    value={project.type}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Status"
                    name="status"
                    value={project.status}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Budget"
                    name="budget"
                    type="number"
                    value={project.budget}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Priority"
                    name="priority"
                    value={project.priority}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Comments"
                    name="comments"
                    value={project.comments}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Create Project
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProject;
