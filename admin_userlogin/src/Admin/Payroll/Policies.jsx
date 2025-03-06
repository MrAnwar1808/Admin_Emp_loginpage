
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const Policies = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Company Policies
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <List>
          <ListItem>
            <ListItemText primary="📜 Code of Conduct" secondary="Employees must follow ethical and professional behavior at all times." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📜 Work Hours Policy" secondary="Standard working hours: 9 AM - 6 PM with flexible work options." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📜 Leave Policy" secondary="Annual leave, sick leave, and emergency leave guidelines." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📜 Remote Work Policy" secondary="Employees can work remotely with manager approval." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📜 Termination Policy" secondary="Guidelines for resignation and termination procedures." />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Policies;
