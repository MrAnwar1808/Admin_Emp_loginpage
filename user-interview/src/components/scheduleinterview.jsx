import React, { useState } from "react";
import {Container,TextField,Button,Typography,Paper,MenuItem,Select,InputLabel,FormControl,Box,IconButton,Grid,Card,CardContent,CardActions,}from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import './scheduleinterview.css'

const ScheduleInterview = () => {
  const [interview, setInterview] = useState({
    employeeName: "",
    employeeRole: "",
    interviewerName: "",
    project: "",
    meetingMode: "",
    date: "",
    time: "",
  });

  const [scheduledInterviews, setScheduledInterviews] = useState([]);

  const handleSchedule = () => {
    if (
      !interview.employeeName ||
      !interview.employeeRole ||
      !interview.project ||
      !interview.date ||
      !interview.time
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const shareableLink = `https://company.com/interview?name=${encodeURIComponent(
      interview.employeeName
    )}&role=${encodeURIComponent(
      interview.employeeRole
    )}&project=${encodeURIComponent(interview.project)}&date=${
      interview.date
    }&time=${interview.time}`;

    setScheduledInterviews([
      ...scheduledInterviews,
      { ...interview, shareableLink },
    ]);

    setInterview({
      employeeName: "",
      employeeRole: "",
      interviewerName: "",
      project: "",
      meetingMode: "",
      date: "",
      time: "",
    });

    alert(
      `Interview scheduled successfully! Share this link: ${shareableLink}`
    );
  };

  const handleEdit = (index) => {
    setInterview(scheduledInterviews[index]);
    setScheduledInterviews(scheduledInterviews.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    const cancelledInterview = scheduledInterviews[index];
    setScheduledInterviews(scheduledInterviews.filter((_, i) => i !== index));
    alert(`Interview for ${cancelledInterview.employeeName} has been successfully cancelled.`);
  };

  return (
    <Container
      component={Paper}
      maxWidth="md"
      sx={{ marginTop: 5, padding: 3, backgroundColor:'grey.100' }}
    >
      <Typography variant="h5" gutterBottom>
        Schedule Interview 🗓️
      </Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel>Project</InputLabel>
        <Select
          value={interview.project}
          onChange={(e) =>
            setInterview({ ...interview, project: e.target.value })
          }
        >
          <MenuItem value="Web Development">Web Development</MenuItem>
          <MenuItem value="Front End Website">Front End Website</MenuItem>
          <MenuItem value="Back End Deploiment">Back End Deploiment</MenuItem>
          <MenuItem value="Online Delivery WebSite">Online Delivery WebSite</MenuItem>
          <MenuItem value="Content Creation">Content Creation</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Employee Name"
        value={interview.employeeName}
        onChange={(e) =>
          setInterview({ ...interview, employeeName: e.target.value })
        }
      />

      <TextField
        fullWidth
        margin="normal"
        label="Employee Role"
        value={interview.employeeRole}
        onChange={(e) =>
          setInterview({ ...interview, employeeRole: e.target.value })
        }
      />

      <TextField
        fullWidth
        margin="normal"
        label="Interviewer Name"
        value={interview.interviewerName}
        onChange={(e) =>
          setInterview({ ...interview, interviewerName: e.target.value })
        }
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Meeting Mode</InputLabel>
        <Select
          value={interview.meetingMode}
          onChange={(e) =>
            setInterview({ ...interview, meetingMode: e.target.value })
          }
        >
          <MenuItem value="Online">Online</MenuItem>
          <MenuItem value="In-Person">In-Person</MenuItem>
          <MenuItem value="Phone">Phone</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        margin="normal"
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={interview.date}
        onChange={(e) => setInterview({ ...interview, date: e.target.value })}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        value={interview.time}
        onChange={(e) => setInterview({ ...interview, time: e.target.value })}
      />

      <Box sx={{ marginTop: 3, textAlign: "center" }}>
        <Button variant="contained" color="secondary" onClick={handleSchedule}>
          Schedule Interview
        </Button>
      </Box>

      {scheduledInterviews.length > 0 && (
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h6">
            Scheduled Interviews
          </Typography>

          <Grid container spacing={2}>
            {scheduledInterviews.map((interview, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ backgroundColor: "#f5f5f5" }}>
                  <CardContent>
                    <Typography variant="body1">
                      <strong>Employee:</strong> {interview.employeeName}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Role:</strong> {interview.employeeRole}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Interviewer:</strong> {interview.interviewerName}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Project:</strong> {interview.project}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Meeting Mode:</strong> {interview.meetingMode}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Date:</strong> {interview.date}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Time:</strong> {interview.time}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ wordBreak: "break-word", marginTop: 1 }}
                    >
                      <strong>Shareable Link:</strong> <br />
                      <a
                        href={interview.shareableLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {interview.shareableLink}
                      </a>
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(index)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ScheduleInterview;




// wordBreak: "break-word" ensures that long URLs break properly instead of overflowing.
// target="_blank" ensures the link opens in a new tab.
// rel="noopener noreferrer" is a security measure to prevent potential security risks when opening a new tab.
