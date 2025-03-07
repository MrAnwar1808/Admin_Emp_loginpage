import React from 'react';
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Fade,
  IconButton,
  Tooltip,
} from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';
import InfoIcon from '@mui/icons-material/Info';

const policies = [
  {
    title: '📜 Code of Conduct',
    description: 'Employees must follow ethical and professional behavior at all times.',
  },
  {
    title: '📜 Work Hours Policy',
    description: 'Standard working hours: 9 AM - 6 PM with flexible work options.',
  },
  {
    title: '📜 Leave Policy',
    description: 'Annual leave, sick leave, and emergency leave guidelines.',
  },
  {
    title: '📜 Remote Work Policy',
    description: 'Employees can work remotely with manager approval.',
  },
  {
    title: '📜 Termination Policy',
    description: 'Guidelines for resignation and termination procedures.',
  },
  {
    title: '📜 Health and Safety Policy',
    description: 'Employees must adhere to safety protocols to ensure a safe working environment.',
  },
  {
    title: '📜 Equal Opportunity Employment',
    description: 'Our company is committed to providing equal employment opportunities to all.',
  },
  {
    title: '📜 Anti-Harassment Policy',
    description: 'Zero tolerance for harassment; procedures for reporting are in place.',
  },
  {
    title: '📜 Confidentiality Policy',
    description: 'Employees must protect company and client information.',
  },
];

const Policies = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Fade in timeout={1000}>
            <Typography variant="h4" align="center" gutterBottom>
              Company Policies
            </Typography>
          </Fade>
          <Paper
            style={{
              padding: '20px',
              marginTop: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <List>
              {policies.map((policy, index) => (
                <Fade in timeout={1500} key={index}>
                  <ListItem
                    style={{
                      padding: '15px',
                      borderBottom: '1px solid #e0e0e0',
                      transition: 'background-color 0.3s',
                      '&:hover': { backgroundColor: '#e0f7fa' },
                    }}
                  >
                    <ListItemText
                      primary={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="h6" style={{ marginRight: '10px' }}>
                            {policy.title}
                          </Typography>
                          <Tooltip title={policy.description} arrow>
                            <IconButton size="small">
                              <InfoIcon fontSize="small" color="primary" />
                            </IconButton>
                          </Tooltip>
                        </div>
                      }
                      secondary={policy.description}
                    />
                  </ListItem>
                </Fade>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Policies;
