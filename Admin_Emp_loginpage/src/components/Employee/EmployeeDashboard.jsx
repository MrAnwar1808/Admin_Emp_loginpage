import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../styles/EmployeeDashboard.css";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const employee = JSON.parse(sessionStorage.getItem("loggedEmployee"));

  useEffect(() => {
    if (!employee) {
      navigate("/employee/login");
    }
  }, [employee, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedEmployee");
    navigate("/employee/login");
  };


  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [5, 10, 8, 12],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container maxWidth="lg" className="dashboard-container">
      <Grid container spacing={2} className="dashboard-grid">
      
        <Grid item xs={12} md={4}>
          <Paper className="card profile-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Employee Profile
            </Typography>
            <Typography variant="body1">
              <strong>Name:</strong> {employee.name}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {employee.email}
            </Typography>
            <Typography variant="body1">
              <strong>Position:</strong> {employee.position}
            </Typography>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleLogout}
              className="logout-button"
            >
              Logout
            </Button>
          </Paper>
        </Grid>

        
        <Grid item xs={12} md={8}>
          <Paper className="card stats-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Dashboard Stats
            </Typography>
            <Bar data={chartData} options={chartOptions} />
          </Paper>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Paper className="card tasks-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Recent Tasks
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Task 1: Complete project report" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Task 2: Attend team meeting" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Task 3: Review pull requests" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Task 4: Update documentation" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

       
        <Grid item xs={12} md={6}>
          <Paper className="card notifications-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Notifications
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="New comment on Task 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Your timesheet is due tomorrow" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Meeting scheduled for Friday at 3 PM" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        
        <Grid item xs={12}>
          <Paper className="card deadlines-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Upcoming Deadlines
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Project X - Submission Date: March 15" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feedback for Task 2 - Due: March 10" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prepare presentation for next meeting - Due: March 12" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Paper className="card performance-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Performance Review
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Q1 Goals: Achieved" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Q2 Goals: In Progress" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feedback: Excellent work!" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Paper className="card team-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Team Members
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Shaik NagurBabu " />
              </ListItem>
              <ListItem>
                <ListItemText primary="Shaik Anwar" />
              </ListItem>
              <ListItem>
                <ListItemText primary="KATARI LAKSHMINARAYANA" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12}>
          <Paper className="card resources-paper">
            <Typography variant="h6" align="center" gutterBottom>
              Resources
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Employee Handbook" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Policies" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Training Materials" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeeDashboard;
