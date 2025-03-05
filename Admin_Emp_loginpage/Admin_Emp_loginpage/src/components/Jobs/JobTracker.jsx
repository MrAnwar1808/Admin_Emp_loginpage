import React from "react";
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import "../../styles/Jobs.css";

const jobApplications = [
  { id: 1, jobTitle: "Software Engineer", status: "Pending" },
  { id: 2, jobTitle: "Data Analyst", status: "Interview Scheduled" },
];

const JobTracker = () => {
  return (
    <Container>
      <Typography variant="h4" className="job-title">Job Application Tracker</Typography>
      <Grid container spacing={3}>
        {jobApplications.map((job) => (
          <Grid item xs={12} sm={6} key={job.id}>
            <Card className="job-card">
              <CardContent>
                <Typography variant="h6">{job.jobTitle}</Typography>
                <Typography>Status: {job.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobTracker;
