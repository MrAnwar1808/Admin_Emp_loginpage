
import React from "react";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

 
const AdminDashboard = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    sessionStorage.removeItem("loggedAdmin");
    navigate("/admin/login");
  };
 
  return (
    <Container maxWidth="lg" className="dashboard">
      <Typography variant="h4" className="dashboard-title" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
 
      <Grid container spacing={3} className="dashboard-overview">
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="dashboard-card">
            <Typography variant="h6" align="center">Total Employees</Typography>
            <Typography variant="h4" color="primary" align="center">150</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="dashboard-card">
            <Typography variant="h6" align="center">Active Employees</Typography>
            <Typography variant="h4" color="success" align="center">120</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="dashboard-card">
            <Typography variant="h6" align="center">Pending Applications</Typography>
            <Typography variant="h4" color="warning" align="center">30</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="dashboard-card">
            <Typography variant="h6" align="center">Jobs Posted</Typography>
            <Typography variant="h4" color="secondary" align="center">25</Typography>
          </Paper>
        </Grid>
      </Grid>
 
      <Grid container spacing={3} className="dashboard-grid" style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="dashboard-card">
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
          <Paper className="dashboard-card">
            <Typography variant="h6" align="center">Projects Management</Typography>
            <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/create-project")} style={{ marginTop: "10px" }}>
              Create Project
            </Button>
            <Button variant="contained" color="secondary" fullWidth onClick={() => navigate("/admin/view-projects")} style={{ marginTop: "10px" }}>
              View Projects
            </Button>
            <Button variant="contained" color="success" fullWidth onClick={() => navigate("/admin/project-tracker")} style={{ marginTop: "10px" }}>
              Track Projects
            </Button>
          </Paper>
        </Grid>
 
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="dashboard-card">
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
          <Paper className="dashboard-card">
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
          <Paper className="dashboard-card">
            <Typography variant="h6" align="center">Reports & Analytics</Typography>
            <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/admin/reports")} style={{ marginTop: "10px" }}>
              View Reports
            </Button>
          </Paper>
        </Grid>
 
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="dashboard-card">
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
          <Paper className="dashboard-card">
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
          <Paper className="dashboard-card">
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
    </Container>
  );
};
 
export default AdminDashboard;