
import React, { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'Anwar', date: '2025-03-10', reason: 'Medical Leave', status: 'Pending' },
    { id: 2, name: 'Farhan', date: '2025-03-12', reason: 'Family Vacation', status: 'Approved' },
    { id: 3, name: 'Anwar Farhan', date: '2025-03-15', reason: 'Sick Leave', status: 'Pending' },
  ]);

  const handleApprove = (id) => {
    setLeaveRequests(leaveRequests.map(req => req.id === id ? { ...req, status: 'Approved' } : req));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Leave Requests
      </Typography>
      <TableContainer component={Paper}>
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
              <TableRow key={request.id}>
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
    </Container>
  );
};

export default LeaveRequests;
