import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Sidebar from "../../components/Admin/Sidebar";
import "./ViewEmployees.css"

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Get employees from sessionStorage
    const storedEmployees = JSON.parse(sessionStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3}> {/* Sidebar */}
          <Sidebar /> 
        </Grid>
        <Grid item xs={9} style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}> {/* Main content */}
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px", marginBottom: "20px" }}> {/* Add marginBottom here */}
            <Typography variant="h5" align="center" gutterBottom>
              Employee List
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Email</strong></TableCell>
                    <TableCell><strong>Position</strong></TableCell>
                    <TableCell><strong>Department</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.length > 0 ? (
                    employees.map((emp, index) => (
                      <TableRow key={index}>
                        <TableCell>{emp.name}</TableCell>
                        <TableCell>{emp.email}</TableCell>
                        <TableCell>{emp.position}</TableCell>
                        <TableCell>{emp.department}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        No employees found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewEmployees;
