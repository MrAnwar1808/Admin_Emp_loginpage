import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const Reports = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: 'Employee Attendance Report',
      date: 'March 2025',
      overview: 'Overview of employee attendance for March 2025.',
      keyMetrics: { totalEmployees: 100, present: 95, absent: 5, attendanceRate: '95%' },
      content: 'Details about employee attendance...',
    },
    {
      id: 2,
      title: 'Payroll Summary Report',
      date: 'February 2025',
      overview: 'Summary of payroll data for February 2025.',
      keyMetrics: { totalPayroll: '$100,000', bonuses: '$10,000', deductions: '$5,000' },
      content: 'Details about payroll allocations...',
    },
    {
      id: 3,
      title: 'Security Audit Report',
      date: 'March 2025',
      overview: 'Findings from the security audit conducted in March 2025.',
      keyMetrics: { vulnerabilitiesFound: 3, risksMitigated: 2, recommendations: 5 },
      content: 'Details about the security measures...',
    },
  ]);

  const [open, setOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleClickOpen = (report) => {
    setSelectedReport(report);
    setIsEditing(!!report);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReport(null);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (isEditing) {
      setReports((prevReports) =>
        prevReports.map((report) => (report.id === selectedReport.id ? selectedReport : report))
      );
    } else {
      setReports((prevReports) => [
        ...prevReports,
        { ...selectedReport, id: prevReports.length + 1 }, // Assign a new ID
      ]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setReports((prevReports) => prevReports.filter((report) => report.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            System Reports
          </Typography>
          <Button variant="contained" color="primary" onClick={() => handleClickOpen(null)}>
            Add Report
          </Button>
          <Paper style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', marginTop: '20px' }}>
            <List>
              {reports.map((report) => (
                <ListItem key={report.id}>
                  <ListItemText primary={report.title} secondary={`Generated: ${report.date}`} />
                  <Button variant="contained" color="primary" style={{ marginLeft: '20px' }} onClick={() => handleClickOpen(report)}>
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary" style={{ marginLeft: '20px' }} onClick={() => handleDelete(report.id)}>
                    Delete
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Dialog for adding/editing a report */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{isEditing ? 'Edit Report' : 'Add Report'}</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                type="text"
                fullWidth
                value={selectedReport?.title || ''}
                onChange={(e) => setSelectedReport({ ...selectedReport, title: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Date"
                type="text"
                fullWidth
                value={selectedReport?.date || ''}
                onChange={(e) => setSelectedReport({ ...selectedReport, date: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Overview"
                type="text"
                fullWidth
                value={selectedReport?.overview || ''}
                onChange={(e) => setSelectedReport({ ...selectedReport, overview: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Key Metrics"
                type="text"
                fullWidth
                value={selectedReport?.keyMetrics ? JSON.stringify(selectedReport.keyMetrics) : ''}
                onChange={(e) => setSelectedReport({ ...selectedReport, keyMetrics: JSON.parse(e.target.value) })}
              />
              <TextField
                margin="dense"
                label="Content"
                type="text"
                fullWidth
                value={selectedReport?.content || ''}
                onChange={(e) => setSelectedReport({ ...selectedReport, content: e.target.value })}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSave} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reports;
