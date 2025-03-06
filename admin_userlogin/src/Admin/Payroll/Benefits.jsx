
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const Benefits = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Employee Benefits
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <List>
          <ListItem>
            <ListItemText primary="✅ Health Insurance" secondary="Comprehensive medical insurance for employees and their families." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Paid Time Off (PTO)" secondary="Annual leave, sick leave, and personal days off." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Retirement Plans" secondary="Company-sponsored 401(k) and pension plans." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Work From Home" secondary="Flexible work-from-home policies available." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Learning & Development" secondary="Company-sponsored courses and upskilling programs." />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Benefits;
