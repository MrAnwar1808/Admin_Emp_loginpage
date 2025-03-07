import React, { useState } from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, Paper, Fade, Button } from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const SystemLogs = () => {
  const [logs, setLogs] = useState([
    { id: 1, message: 'System initialized successfully', timestamp: '2025-03-01 08:00 AM', done: false },
    { id: 2, message: 'User admin logged in', timestamp: '2025-03-01 09:15 AM', done: false },
    { id: 3, message: 'Backup process started', timestamp: '2025-03-01 09:30 AM', done: false },
    { id: 4, message: 'Error: Unable to connect to database', timestamp: '2025-03-01 10:00 AM', done: false },
    { id: 5, message: 'New user registered: Jane Smith', timestamp: '2025-03-01 10:45 AM', done: false },
    { id: 6, message: 'Payment of $200 received for order #56789', timestamp: '2025-03-01 11:10 AM', done: false },
    { id: 7, message: 'User admin logged out', timestamp: '2025-03-01 12:00 PM', done: false },
    { id: 8, message: 'Scheduled system maintenance began', timestamp: '2025-03-01 01:00 PM', done: false },
    { id: 9, message: 'System maintenance completed successfully', timestamp: '2025-03-01 02:00 PM', done: false },
    { id: 10, message: 'User data sync completed', timestamp: '2025-03-01 03:00 PM', done: false },
  ]);

  const handleRefresh = () => {
    // Logic to refresh the logs, for example, fetching new logs from an API
    console.log('Logs refreshed');
  };

  const handleClearLogs = () => {
    // Clear all logs
    setLogs([]);
    console.log('Logs cleared');
  };

  const handleMarkAsDone = (id) => {
    // Update the log's 'done' status
    setLogs((prevLogs) =>
      prevLogs.map((log) =>
        log.id === id ? { ...log, done: true } : log
      )
    );
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Fade in timeout={1000}>
            <Typography variant="h4" align="center" gutterBottom>
              System Logs
            </Typography>
          </Fade>
          <Paper style={{ padding: '20px', boxShadow: '0px 3px 10px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <Button variant="contained" color="primary" onClick={handleRefresh}>
                Refresh Logs
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleClearLogs}>
                Clear Logs
              </Button>
            </div>
            <List>
              {logs.length === 0 ? (
                <ListItem>
                  <ListItemText primary="No logs available" />
                </ListItem>
              ) : (
                logs.map((log) => (
                  <Fade in key={log.id} timeout={1000}>
                    <ListItem style={{ transition: '0.5s', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                      <ListItemText
                        primary={log.message}
                        secondary={`Timestamp: ${log.timestamp}`}
                        style={{ textDecoration: log.done ? 'line-through' : 'none' }} // Strike-through if done
                      />
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleMarkAsDone(log.id)}
                        disabled={log.done} // Disable button if already done
                      >
                        {log.done ? 'Done' : 'Mark as Done'}
                      </Button>
                    </ListItem>
                  </Fade>
                ))
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SystemLogs;
