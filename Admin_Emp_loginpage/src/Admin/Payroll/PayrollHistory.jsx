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
  TextField,
  Button,
  Toolbar,
  Modal,
  Box,
} from '@mui/material';
import Sidebar from '../../components/Admin/Sidebar';

const PayrollHistory = () => {
  const [historyData] = useState([
    { id: 1, name: 'Anwar', month: 'February 2025', amount: '₹24,000', status: 'Paid' },
    { id: 2, name: 'Farhan', month: 'February 2025', amount: '₹45,000', status: 'Paid' },
    { id: 3, name: 'Anwar Farhan', month: 'February 2025', amount: '₹54,000', status: 'Paid' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = () => {
    console.log('Search for:', searchTerm);
  };

  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Payroll History
          </Typography>
          <Toolbar>
            <TextField
              variant="outlined"
              label="Search by Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginRight: '10px', flex: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Toolbar>
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Month</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Amount</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyData
                  .filter(record => record.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.id}</TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.month}</TableCell>
                      <TableCell>{record.amount}</TableCell>
                      <TableCell style={{ color: 'green', fontWeight: 'bold' }}>
                        {record.status}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleOpenModal(record)}
                        >
                          Share History
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Modal for sharing payroll history */}
          <Modal open={modalOpen} onClose={handleCloseModal}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
              }}
            >
              {selectedEmployee && (
                <>
                  <Typography variant="h6" gutterBottom>
                    Payroll History for {selectedEmployee.name}
                  </Typography>
                  <Typography variant="body1">
                    Month: {selectedEmployee.month}
                  </Typography>
                  <Typography variant="body1">
                    Amount: {selectedEmployee.amount}
                  </Typography>
                  <Typography variant="body1">
                    Status: {selectedEmployee.status}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      // Add your sharing logic here (e.g., send an email, copy link, etc.)
                      alert(`Sharing history for ${selectedEmployee.name}`);
                      handleCloseModal();
                    }}
                    style={{ marginTop: '20px' }}
                  >
                    Share
                  </Button>
                </>
              )}
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PayrollHistory;
