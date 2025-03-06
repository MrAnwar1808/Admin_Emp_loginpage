
import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(sessionStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  return (
    <Container maxWidth="sm">
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
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography align="center">No projects found. Please create one.</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ViewProjects;
