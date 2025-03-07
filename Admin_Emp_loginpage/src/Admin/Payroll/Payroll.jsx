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
  Snackbar,
  Slide,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const Payroll = () => {
  const [payrollData, setPayrollData] = useState([
    { id: 1, name: 'Anwar', salary: '₹30,000', deductions: '₹6,000', netPay: '₹24,000' },
    { id: 2, name: 'Farhan', salary: '₹55,000', deductions: '₹10,000', netPay: '₹45,000' },
    { id: 3, name: 'Anwar Farhan', salary: '₹60,000', deductions: '₹6,000', netPay: '₹54,000' },
    { id: 4, name: 'Sara', salary: '₹40,000', deductions: '₹8,000', netPay: '₹32,000' },
    { id: 5, name: 'Ali', salary: '₹70,000', deductions: '₹12,000', netPay: '₹58,000' },
  ]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Add employee state
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [deductions, setDeductions] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleAddEmployee = () => {
    const newId = payrollData.length ? payrollData[payrollData.length - 1].id + 1 : 1; // Assign a new ID
    const newNetPay = `₹${(parseInt(salary) - parseInt(deductions)).toLocaleString()}`;
    
    const newEmployee = {
      id: newId,
      name: name,
      salary: `₹${parseInt(salary).toLocaleString()}`,
      deductions: `₹${parseInt(deductions).toLocaleString()}`,
      netPay: newNetPay,
    };

    setPayrollData([...payrollData, newEmployee]);
    setSnackbarMessage(`Added ${name} to payroll.`);
    setSnackbarOpen(true);
    
    // Clear fields
    setName('');
    setSalary('');
    setDeductions('');
  };

  const handleSalaryUpdate = (employee) => {
    setEditEmployee(employee);
    setName(employee.name);
    setSalary(employee.salary.replace(/,/g, '').slice(1)); // Remove ₹ and convert to number
    setDeductions(employee.deductions.replace(/,/g, '').slice(1)); // Remove ₹ and convert to number
    setDialogOpen(true);
  };

  const handleEditSave = () => {
    setPayrollData(prevData =>
      prevData.map(emp =>
        emp.id === editEmployee.id
          ? {
              ...emp,
              name: name,
              salary: `₹${parseInt(salary).toLocaleString()}`,
              deductions: `₹${parseInt(deductions).toLocaleString()}`,
              netPay: `₹${(parseInt(salary) - parseInt(deductions)).toLocaleString()}`,
            }
          : emp
      )
    );
    setSnackbarMessage(`Updated ${editEmployee.name}'s details.`);
    setSnackbarOpen(true);
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    setPayrollData(prevData => prevData.filter(emp => emp.id !== id));
    setSnackbarMessage(`Deleted employee ID: ${id}`);
    setSnackbarOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditEmployee(null);
    setName('');
    setSalary('');
    setDeductions('');
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Payroll Details
          </Typography>

          {/* Add Employee Form */}
          <Grid container spacing={2} style={{ marginBottom: '20px' }}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Gross Salary"
                variant="outlined"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Deductions"
                variant="outlined"
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={handleAddEmployee}>
            Add Employee
          </Button>

          {/* Payroll Table */}
          <TableContainer component={Paper} elevation={3} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Gross Salary</TableCell>
                  <TableCell>Deductions</TableCell>
                  <TableCell>Net Pay</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payrollData.map((employee) => (
                  <TableRow key={employee.id} style={{ transition: 'background-color 0.3s' }}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.salary}</TableCell>
                    <TableCell>{employee.deductions}</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color: 'green' }}>
                      {employee.netPay}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleSalaryUpdate(employee)}>
                        Edit
                      </Button>
                      <Button variant="contained" color="secondary" onClick={() => handleDelete(employee.id)} style={{ marginLeft: '10px' }}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Snackbar
            open={snackbarOpen}
            onClose={() => setSnackbarOpen(false)}
            TransitionComponent={(props) => <Slide {...props} direction="up" />}
            message={snackbarMessage}
            autoHideDuration={3000}
          />

          <Dialog open={dialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Edit Employee</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Name"
                type="text"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Gross Salary"
                type="number"
                fullWidth
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Deductions"
                type="number"
                fullWidth
                value={deductions}
                onChange={(e) => setDeductions(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleEditSave} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payroll;
