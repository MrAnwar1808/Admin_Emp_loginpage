// src/components/admin/AssignProject.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AssignProject = () => {
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchEmployees = async () => {
      
      const response = await fetch('/api/employees'); 
      const data = await response.json();
      setEmployees(data);
    };

    const fetchProjects = async () => {
     
      const response = await fetch('/api/projects'); 
      const data = await response.json();
      setProjects(data);
    };

    fetchEmployees();
    fetchProjects();
  }, []);

  const handleAssign = async () => {
    
    await fetch('/api/assign-project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employeeId: selectedEmployee, projectId: selectedProject }),
    });

    navigate('/admin/dashboard');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Assign Project
      </Typography>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="employee-select-label">Select Employee</InputLabel>
        <Select
          labelId="employee-select-label"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
          label="Select Employee"
        >
          {employees.map((employee) => (
            <MenuItem key={employee.id} value={employee.id}>
              {employee.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="project-select-label">Select Project</InputLabel>
        <Select
          labelId="project-select-label"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          label="Select Project"
        >
          {projects.map((project) => (
            <MenuItem key={project.id} value={project.id}>
              {project.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleAssign} fullWidth>
        Assign Project
      </Button>
    </Container>
  );
};

export default AssignProject;
