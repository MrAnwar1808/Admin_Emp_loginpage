import React, { useState } from "react";
import { Container, Typography, TextField, Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    if (!projectName || !employeeName) {
      alert("Please fill in all fields.");
      return;
    }

    const projectData = { name: projectName, employeeName };

    try {
      const response = await fetch("/api/create-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        setSnackbarOpen(true);
        
        setProjectName("");
        setEmployeeName("");
      } else {
        alert("Failed to create project.");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      alert("An error occurred while creating the project.");
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    navigate("/admin/dashboard"); 
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Create New Project
      </Typography>
      <TextField
        label="Project Name"
        fullWidth
        margin="normal"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <TextField
        label="Assigned Employee Name"
        fullWidth
        margin="normal"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCreateProject}
        style={{ marginTop: "20px" }}
      >
        Create Project
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Project created successfully!"
      />
    </Container>
  );
};

export default CreateProject;
