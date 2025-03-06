
import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Button } from '@mui/material';

const Reports = () => {
  const [reports, setReports] = useState([
    { id: 1, title: 'Employee Attendance Report', date: 'March 2025' },
    { id: 2, title: 'Payroll Summary Report', date: 'February 2025' },
    { id: 3, title: 'Security Audit Report', date: 'March 2025' },
  ]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        System Reports
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <List>
          {reports.map((report) => (
            <ListItem key={report.id}>
              <ListItemText primary={report.title} secondary={`Generated: ${report.date}`} />
              <Button variant="contained" color="primary">
                View
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Reports;
