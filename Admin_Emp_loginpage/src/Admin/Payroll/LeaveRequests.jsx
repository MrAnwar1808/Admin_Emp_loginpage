import React, { useState } from 'react';
import { Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Snackbar, Slide } from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'Anwar', date: '2025-03-10', reason: 'Medical Leave', status: 'Pending' },
    { id: 2, name: 'Farhan', date: '2025-03-12', reason: 'Family Vacation', status: 'Approved' },
    { id: 3, name: 'Anwar Farhan', date: '2025-03-15', reason: 'Sick Leave', status: 'Pending' },
    // Additional requests
    { id: 4, name: 'Sara', date: '2025-03-18', reason: 'Personal Leave', status: 'Pending' },
    { id: 5, name: 'Ali', date: '2025-03-20', reason: 'Emergency Leave', status: 'Pending' },
    { id: 6, name: 'Zara', date: '2025-03-22', reason: 'Maternity Leave', status: 'Pending' },
  ]);
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleApprove = (id) => {
    setLeaveRequests(leaveRequests.map(req => req.id === id ? { ...req, status: 'Approved' } : req));
    setSnackbarMessage('Leave request approved!');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar /> 
        </Grid>
        <Grid item xs={9} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Leave Requests
          </Typography>
          <TableContainer component={Paper} elevation={3} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaveRequests.map((request) => (
                  <TableRow key={request.id} style={{ transition: 'background-color 0.3s' }}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>{request.reason}</TableCell>
                    <TableCell style={{ color: request.status === 'Approved' ? 'green' : 'orange' }}>
                      {request.status}
                    </TableCell>
                    <TableCell>
                      {request.status === 'Pending' && (
                        <Button variant="contained" color="success" onClick={() => handleApprove(request.id)}>
                          Approve
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Snackbar
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            TransitionComponent={(props) => <Slide {...props} direction="up" />}
            message={snackbarMessage}
            autoHideDuration={3000}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LeaveRequests;
