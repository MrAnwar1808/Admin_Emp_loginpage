import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  TextField,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import Sidebar1 from "./Sidebar1";


const EmployeeDashboard = () => {
  const [attendance, setAttendance] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveReason, setLeaveReason] = useState("");

  const handleLogin = () => {
    const currentDate = new Date();
    const newLog = {
      date: currentDate.toLocaleDateString(),
      loginTime: currentDate.toLocaleTimeString(),
      logoutTime: "N/A",
      breakStartTime: "N/A",
      breakEndTime: "N/A",
      breakDuration: "0 mins",
      netHours: "N/A",
    };
    setAttendance([...attendance, newLog]);
  };

  const handleLogout = (index) => {
    const updatedLogs = [...attendance];
    const currentDate = new Date();
    updatedLogs[index].logoutTime = currentDate.toLocaleTimeString();
    setAttendance(updatedLogs);
  };

  const handleStartBreak = (index) => {
    const updatedLogs = [...attendance];
    updatedLogs[index].breakStartTime = new Date().toLocaleTimeString();
    setAttendance(updatedLogs);
  };

  const handleEndBreak = (index) => {
    const updatedLogs = [...attendance];
    updatedLogs[index].breakEndTime = new Date().toLocaleTimeString();
    setAttendance(updatedLogs);
  };

  const handleApplyLeave = () => {
    if (leaveReason.trim() === "") return;
    const newLeave = {
      date: new Date().toLocaleDateString(),
      reason: leaveReason,
      status: "Pending",
    };
    setLeaveRequests([...leaveRequests, newLeave]);
    setLeaveReason("");
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Sidebar1 /> 
        </Grid>
        
        <Grid item xs={12} md={9}>
          <Typography variant="h4" sx={{ my: 3, textAlign: "center", fontWeight: "bold" }}>
            Employee Dashboard
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Attendance Controls
                  </Typography>
                  <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mr: 2 }}>
                    Login
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => setAttendance([])}>
                    Reset Attendance
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Apply for Leave
                  </Typography>
                  <Box display="flex" gap={2}>
                    <TextField
                      label="Leave Reason"
                      variant="outlined"
                      fullWidth
                      value={leaveReason}
                      onChange={(e) => setLeaveReason(e.target.value)}
                    />
                    <Button variant="contained" color="warning" onClick={handleApplyLeave}>
                      Apply Leave
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <TableContainer component={Paper} sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ p: 2 }}>
              Attendance Log
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Login</TableCell>
                  <TableCell>Logout</TableCell>
                  <TableCell>Break Start</TableCell>
                  <TableCell>Break End</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendance.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell>{log.date}</TableCell>
                    <TableCell>{log.loginTime}</TableCell>
                    <TableCell>{log.logoutTime}</TableCell>
                    <TableCell>{log.breakStartTime}</TableCell>
                    <TableCell>{log.breakEndTime}</TableCell>
                    <TableCell>
                      {log.logoutTime === "N/A" && (
                        <Button variant="contained" color="secondary" onClick={() => handleLogout(index)}>
                          Logout
                        </Button>
                      )}
                      {log.breakStartTime === "N/A" && log.logoutTime === "N/A" && (
                        <Button variant="contained" color="warning" onClick={() => handleStartBreak(index)} sx={{ ml: 1 }}>
                          Start Break
                        </Button>
                      )}
                      {log.breakStartTime !== "N/A" && log.breakEndTime === "N/A" && (
                        <Button variant="contained" color="success" onClick={() => handleEndBreak(index)} sx={{ ml: 1 }}>
                          End Break
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper}>
            <Typography variant="h6" sx={{ p: 2 }}>
              Leave Requests
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaveRequests.map((leave, index) => (
                  <TableRow key={index}>
                    <TableCell>{leave.date}</TableCell>
                    <TableCell>{leave.reason}</TableCell>
                    <TableCell>{leave.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeeDashboard;
