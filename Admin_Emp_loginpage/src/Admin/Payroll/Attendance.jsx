import React from 'react';
import { Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const Attendance = () => {
  // Sample attendance data
  const attendanceData = [
    { id: 1, name: 'Anwar', date: '2025-03-05', status: 'Present' },
    { id: 2, name: 'Farhan', date: '2025-03-05', status: 'Absent' },
    { id: 3, name: 'Anwar Farhan', date: '2025-03-05', status: 'Present' },
    { id: 4, name: 'Sara', date: '2025-03-06', status: 'Present' },
    { id: 5, name: 'John', date: '2025-03-06', status: 'Absent' },
    { id: 6, name: 'Mike', date: '2025-03-06', status: 'Present' },
    { id: 7, name: 'Emma', date: '2025-03-07', status: 'Present' },
    { id: 8, name: 'Sophia', date: '2025-03-07', status: 'Absent' },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Employee Attendance
          </Typography>
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>ID</TableCell>
                  <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Date</TableCell>
                  <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.id}</TableCell>
                    <TableCell>{record.name}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell style={{ color: record.status === 'Present' ? 'green' : 'red', fontWeight: 'bold' }}>
                      {record.status}
                    </TableCell>
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

export default Attendance;
