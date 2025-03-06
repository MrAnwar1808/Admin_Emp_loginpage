
import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const SystemLogs = () => {
  const [logs, setLogs] = useState([
    { id: 1, message: 'System rebooted successfully', timestamp: '2025-03-01 09:00 AM' },
    { id: 2, message: 'User admin logged in', timestamp: '2025-03-01 10:15 AM' },
    { id: 3, message: 'Database backup completed', timestamp: '2025-02-28 11:45 PM' },
    { id: 4, message: 'Error: Failed API request', timestamp: '2025-02-27 03:30 PM' },
  ]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        System Logs
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <List>
          {logs.map((log) => (
            <ListItem key={log.id}>
              <ListItemText primary={log.message} secondary={`Timestamp: ${log.timestamp}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default SystemLogs;
