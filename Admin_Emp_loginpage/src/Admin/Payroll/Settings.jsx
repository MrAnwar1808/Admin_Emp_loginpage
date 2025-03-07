
import React, { useState } from 'react';
import { Container,Grid, Typography, FormControl, InputLabel, Select, MenuItem, Switch, FormControlLabel, Paper } from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  return (
    <Container maxWidth="sm">
      <Grid item xs={2}>
        <Sidebar /> 
      </Grid>
      <Typography variant="h4" align="center" gutterBottom style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
        System Settings
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Theme</InputLabel>
          <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <MenuItem value="light">Light Mode</MenuItem>
            <MenuItem value="dark">Dark Mode</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} />}
          label="Enable Notifications"
        />
      </Paper>
    </Container>
  );
};

export default Settings;