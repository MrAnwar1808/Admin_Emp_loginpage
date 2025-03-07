import React from "react";
import { Card, CardContent, Typography, Button, Container, Grid } from "@mui/material";
import "../../styles/Jobs.css";

const jobs = [
  { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York", salary: "$80,000" },
  { id: 2, title: "Data Analyst", company: "Data Solutions", location: "San Francisco", salary: "$75,000" }
];

const JobList = () => {
  return (
    <Container>
      <Typography variant="h4" className="job-title">Job Listings</Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} key={job.id}>
            <Card className="job-card">
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography>{job.company} - {job.location}</Typography>
                <Typography>Salary: {job.salary}</Typography>
                <Button variant="contained" color="primary">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobList;
