import React from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const Benefits = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar /> 
        </Grid>
        <Grid item xs={9} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
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
              <ListItem>
                <ListItemText primary="✅ Employee Assistance Program" secondary="Confidential counseling and support services." />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Fitness Membership" secondary="Reimbursement for gym memberships and fitness classes." />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Commuter Benefits" secondary="Pre-tax benefits for commuting costs." />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Childcare Assistance" secondary="Support for childcare expenses." />
              </ListItem>
              <ListItem>
                <ListItemText primary="✅ Company Events" secondary="Regular team-building activities and social events." />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
