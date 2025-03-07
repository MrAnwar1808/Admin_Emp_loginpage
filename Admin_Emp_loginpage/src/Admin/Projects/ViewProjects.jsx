import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Sidebar from "../../components/Admin/Sidebar";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedProject, setEditedProject] = useState({
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
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    const storedProjects = JSON.parse(sessionStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const handleEditOpen = (index) => {
    setEditIndex(index);
    setEditedProject(projects[index]);
    setOpenEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = () => {
    const updatedProjects = [...projects];
    updatedProjects[editIndex] = editedProject;
    setProjects(updatedProjects);
    sessionStorage.setItem("projects", JSON.stringify(updatedProjects));
    setOpenEditModal(false);
  };

  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    sessionStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={10 } style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5" align="center" gutterBottom>
              View Projects
            </Typography>
            {projects.length > 0 ? (
              <List>
                {projects.map((project, index) => (
                  <ListItem key={index} divider>
                    <ListItemText
                      primary={project.name}
                      secondary={`Start: ${project.startDate} | End: ${project.endDate}\n${project.description}`}
                    />
                    <Button variant="contained" color="primary" onClick={() => handleEditOpen(index)} style={{ marginRight: '10px' }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography align="center">No projects found. Please create one.</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Edit Project Modal */}
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Edit Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Project Name"
            type="text"
            name="name"
            fullWidth
            value={editedProject.name}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            name="description"
            fullWidth
            value={editedProject.description}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            name="startDate"
            fullWidth
            value={editedProject.startDate}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="End Date"
            type="date"
            name="endDate"
            fullWidth
            value={editedProject.endDate}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="Project Type"
            type="text"
            name="type"
            fullWidth
            value={editedProject.type}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            name="status"
            fullWidth
            value={editedProject.status}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="Budget"
            type="number"
            name="budget"
            fullWidth
            value={editedProject.budget}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="Priority"
            type="text"
            name="priority"
            fullWidth
            value={editedProject.priority}
            onChange={handleEditChange}
            required
          />
          <TextField
            margin="dense"
            label="Comments"
            type="text"
            name="comments"
            fullWidth
            value={editedProject.comments}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ViewProjects;
