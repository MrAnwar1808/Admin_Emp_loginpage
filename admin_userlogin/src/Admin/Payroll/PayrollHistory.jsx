
import React, { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PayrollHistory = () => {
  const [historyData, setHistoryData] = useState([
    { id: 1, name: 'Anwar', month: 'February 2025', amount: '₹24000', status: 'Paid' },
    { id: 2, name: 'Farhan', month: 'February 2025', amount: '₹45000', status: 'Paid' },
    { id: 3, name: 'Anwar Farhan', month: 'February 2025', amount: '₹54000', status: 'Paid' },
  ]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Payroll History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Month</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.month}</TableCell>
                <TableCell>{record.amount}</TableCell>
                <TableCell style={{ color: 'green', fontWeight: 'bold' }}>{record.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PayrollHistory;
