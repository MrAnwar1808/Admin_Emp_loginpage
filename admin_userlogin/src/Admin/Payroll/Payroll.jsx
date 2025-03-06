
import React, { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Payroll = () => {
  const [payrollData, setPayrollData] = useState([
    { id: 1, name: 'Anwar', salary: '₹30000', deductions: '₹6000', netPay: '₹24000' },
    { id: 2, name: 'Farhan', salary: '₹55000', deductions: '₹10000', netPay: '₹45000' },
    { id: 3, name: 'Anwar Farhan', salary: '₹60000', deductions: '₹6000', netPay: '₹54000' },
  ]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Payroll Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gross Salary</TableCell>
              <TableCell>Deductions</TableCell>
              <TableCell>Net Pay</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payrollData.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{employee.deductions}</TableCell>
                <TableCell style={{ fontWeight: 'bold', color: 'green' }}>
                  {employee.netPay}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Payroll;
