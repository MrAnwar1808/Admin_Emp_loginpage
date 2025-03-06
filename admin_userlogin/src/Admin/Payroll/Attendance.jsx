
import React, { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: 'Anwar', date: '2025-03-05', status: 'Present' },
    { id: 2, name: 'farhan', date: '2025-03-05', status: 'Absent' },
    { id: 3, name: 'Anwar Farhan', date: '2025-03-05', status: 'Present' },
  ]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Employee Attendance
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell style={{ color: record.status === 'Present' ? 'green' : 'red' }}>
                  {record.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Attendance;
