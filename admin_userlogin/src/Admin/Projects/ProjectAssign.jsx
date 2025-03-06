
import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent, Button } from "@mui/material";

const ProjectAssignment = () => {
  const [projects, setProjects] = useState({
    ongoing: [{ name: "Web Application", candidates: [] }, { name: "Best News Hub", candidates: [] }],
    building: [{ name: "Project Z", candidates: [] }],
    deploying: [{ name: "Innovator Pro", candidates: [] }],
  });

  const [employees, setEmployees] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Retrieve employees from sessionStorage
    const storedEmployees = JSON.parse(sessionStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleAddCandidate = (category, name) => {
    setSelectedProject({ category, name });
    setOpenDialog(true);
  };

  const addCandidateToProject = () => {
    if (!selectedCandidate) {
      alert("Please select a candidate.");
      return;
    }

    setProjects(prev => ({
      ...prev,
      [selectedProject.category]: prev[selectedProject.category].map(project =>
        project.name === selectedProject.name ? { ...project, candidates: [...project.candidates, selectedCandidate] } : project
      )
    }));

    setSelectedCandidate("");
    setOpenDialog(false);
  };

  return (
    <div style={{ padding: "24px", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>Admin Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
        {Object.keys(projects).map(category => (
          <Card key={category} style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "16px" }}>
            <CardContent>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#374151", textTransform: "capitalize" }}>{category} Projects</h2>
              {projects[category].map((project, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e5e7eb", padding: "8px 0" }}>
                  <p style={{ color: "#4b5563" }}>{project.name} ({project.candidates.join(", ")})</p>
                  <Button style={{ backgroundColor: "#4f46e5", color: "white" }} onClick={() => handleAddCandidate(category, project.name)}>
                    Manage
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Assign Candidate to {selectedProject?.name}</DialogTitle>
        <DialogContent>
          <select style={{ width: "100%", padding: "8px", border: "1px solid #d1d5db", borderRadius: "4px" }} value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
            <option value="">--Select Candidate--</option>
            {employees.map((employee, index) => (
              <option key={index} value={employee.name}>{employee.name}</option>
            ))}
          </select>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#6b7280" }} onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button style={{ backgroundColor: "#4f46e5", color: "white" }} onClick={addCandidateToProject}>Assign</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectAssignment;
