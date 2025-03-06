
import React, { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SecurityAudits = () => {
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, event: 'Failed Login Attempt', user: 'admin', timestamp: '2025-03-01 10:30 AM', status: 'Warning' },
    { id: 2, event: 'Password Change', user: 'Anwar', timestamp: '2025-02-28 02:45 PM', status: 'Success' },
    { id: 3, event: 'Unauthorized Access', user: 'unknown', timestamp: '2025-02-27 08:15 PM', status: 'Critical' },
  ]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Security Audit Logs
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auditLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.id}</TableCell>
                <TableCell>{log.event}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell style={{ fontWeight: 'bold', color: log.status === 'Critical' ? 'red' : 'green' }}>
                  {log.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SecurityAudits;
