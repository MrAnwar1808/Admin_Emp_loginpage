import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const SecurityAudits = () => {
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, event: 'Failed Login Attempt', user: 'admin', timestamp: '2025-03-01 10:30 AM', status: 'Warning' },
    { id: 2, event: 'Password Change', user: 'Anwar', timestamp: '2025-02-28 02:45 PM', status: 'Success' },
    { id: 3, event: 'Unauthorized Access', user: 'unknown', timestamp: '2025-02-27 08:15 PM', status: 'Critical' },
  ]);

  const [open, setOpen] = useState(false);
  const [newLog, setNewLog] = useState({ event: '', user: '', timestamp: '', status: '' });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewLog({ event: '', user: '', timestamp: '', status: '' }); // Reset form
  };

  const handleAddLog = () => {
    setAuditLogs((prevLogs) => [
      ...prevLogs,
      { ...newLog, id: prevLogs.length + 1 }, // Generate a new ID
    ]);
    handleClose();
  };

  const handleStatusAction = (status) => {
    // Define actions based on status
    if (status === 'Critical') {
      alert('Take immediate action!');
    } else if (status === 'Warning') {
      alert('Review the log entry.');
    } else {
      alert('All good!');
    }
  };

  return (
    <Container maxWidth="md">
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Typography variant="h4" align="center" gutterBottom style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
        Security Audit Logs
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Audit Log
      </Button>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
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
                <TableCell>
                  <Button
                    variant="contained"
                    color={log.status === 'Critical' ? 'error' : log.status === 'Warning' ? 'warning' : 'success'}
                    onClick={() => handleStatusAction(log.status)}
                  >
                    {log.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for adding new audit log */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Audit Log</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event"
            type="text"
            fullWidth
            value={newLog.event}
            onChange={(e) => setNewLog({ ...newLog, event: e.target.value })}
          />
          <TextField
            margin="dense"
            label="User"
            type="text"
            fullWidth
            value={newLog.user}
            onChange={(e) => setNewLog({ ...newLog, user: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Timestamp"
            type="text"
            fullWidth
            value={newLog.timestamp}
            onChange={(e) => setNewLog({ ...newLog, timestamp: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            value={newLog.status}
            onChange={(e) => setNewLog({ ...newLog, status: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddLog} color="primary">
            Add Log
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SecurityAudits;
