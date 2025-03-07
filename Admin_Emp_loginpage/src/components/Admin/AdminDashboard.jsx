import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [assignedProjects, setAssignedProjects] = useState([]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedAdmin");
    navigate("/admin/login");
  };

  
  useEffect(() => {
    const fetchAssignedProjects = async () => {
      try {
        const response = await fetch('/api/assigned-projects'); 
        const data = await response.json();
        setAssignedProjects(data);
      } catch (error) {
        console.error("Error fetching assigned projects:", error);
      }
    };

    fetchAssignedProjects();
  }, []);

  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar /> 
      </Grid>
      <Grid item xs={10} style={{ padding: "0px", marginTop: "00px", marginBottom: "20px" ,marginLeft:"0px"}}>
        <Container maxWidth="lg" className="dashboard">
          <Typography variant="h4" className="dashboard-title" align="center" gutterBottom>
            Admin Dashboard
          </Typography>

          <Grid container spacing={3} className="dashboard-overview">
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Total Employees</Typography>
                <Typography variant="h4" color="primary" align="center">150</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Active Employees</Typography>
                <Typography variant="h4" color="success" align="center">120</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Pending Applications</Typography>
                <Typography variant="h4" color="warning" align="center">30</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Jobs Posted</Typography>
                <Typography variant="h4" color="secondary" align="center">25</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3} className="dashboard-grid" style={{ marginTop: "20px" }}>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Employee Management</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/create-employee")} style={{ marginTop: "10px" }}>
                  Create Employee
                </Button>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/view-employees")} style={{ marginTop: "10px" }}>
                  View Employees
                </Button>
              </Paper>
            </Grid>

           
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Projects Management</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/create-project")} style={{ marginTop: "10px" }}>
                  Create Project
                </Button>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/view-projects")} style={{ marginTop: "10px" }}>
                  View Projects
                </Button>
                
                <Button variant="contained" color="info" fullWidth onClick={() => navigate("/admin/assign-project")} style={{ marginTop: "10px" }}>
                  Assign Project
                </Button>
              </Paper>
            </Grid>

            
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Payroll Management</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/payroll")} style={{ marginTop: "10px" }}>
                  Manage Payroll
                </Button>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/payroll-history")} style={{ marginTop: "10px" }}>
                  Payroll History
                </Button>
              </Paper>
            </Grid>

            
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Attendance Tracking</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/attendance")} style={{ marginTop: "10px" }}>
                  Track Attendance
                </Button>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/leave-requests")} style={{ marginTop: "10px" }}>
                  Leave Requests
                </Button>
              </Paper>
            </Grid>

            
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Reports & Analytics</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/reports")} style={{ marginTop: "10px" }}>
                  View Reports
                </Button>
              </Paper>
            </Grid>

            
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">System Logs</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/system-logs")} style={{ marginTop: "10px" }}>
                  View Logs
                </Button>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/security-audits")} style={{ marginTop: "10px" }}>
                  Security Audits
                </Button>
              </Paper>
            </Grid>
            
          
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">HR Management</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/benefits")} style={{ marginTop: "10px" }}>
                  Employee Benefits
                </Button>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/policies")} style={{ marginTop: "10px" }}>
                  Policies
                </Button>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Interview Scheduling</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/schedule-interview")} style={{ marginTop: "10px" }}>
                  Schedule Interview
                </Button>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/view-interviews")} style={{ marginTop: "10px" }}>
                  View Scheduled Interviews
                </Button>
              </Paper>
            </Grid>

          


            <Grid item xs={12} sm={6} md={4}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Quick Actions</Typography>
                <Button variant="contained" color="info" fullWidth onClick={() => navigate("/admin/settings")} style={{ marginTop: "10px" }}>
                  Settings
                </Button>
                <Button variant="contained" color="error" fullWidth onClick={handleLogout} style={{ marginTop: "10px" }}>
                  Logout
                </Button>
              </Paper>
            </Grid>
            
          </Grid>
          

         
          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <Paper className="dashboard-card" elevation={3}>
                <Typography variant="h6" align="center">Assigned Projects</Typography>
                {assignedProjects.length > 0 ? (
                  assignedProjects.map((project) => (
                    <Typography key={project.id} align="center">
                      {project.name} - Assigned to: {project.employeeName}
                    </Typography>
                  ))
                ) : (
                  <Typography align="center">No projects assigned yet.</Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
