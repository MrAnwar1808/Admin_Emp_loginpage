import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar1 from "./Sidebar1";

const EmployeeDashboard = () => {
  const [attendance, setAttendance] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveReason, setLeaveReason] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activityLog, setActivityLog] = useState([]);
  
  const [announcements] = useState([
    "Company meeting on Friday at 3 PM.",
    "Performance reviews next month.",
    "Office closed on public holiday."
  ]);

  const handleLogin = () => {
    const currentDate = new Date();
    const newLog = {
      date: currentDate.toLocaleDateString(),
      loginTime: currentDate.toLocaleTimeString(),
      logoutTime: "N/A",
    };
    setAttendance([...attendance, newLog]);
    setActivityLog([...activityLog, `Logged in at ${newLog.loginTime}`]);
  };

  const handleLogout = (index) => {
    const updatedLogs = [...attendance];
    updatedLogs[index].logoutTime = new Date().toLocaleTimeString();
    setAttendance(updatedLogs);
    setActivityLog([...activityLog, `Logged out at ${updatedLogs[index].logoutTime}`]);
  };

  const handleApplyLeave = () => {
    if (!leaveReason.trim()) return;
    const newLeave = {
      date: new Date().toLocaleDateString(),
      reason: leaveReason,
      status: "Pending",
    };
    setLeaveRequests([...leaveRequests, newLeave]);
    setLeaveReason("");
    setActivityLog([...activityLog, `Applied for leave: ${leaveReason}`]);
  };

  const handleApproveLeave = (index, status) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = status;
    setLeaveRequests(updatedRequests);
    setActivityLog([...activityLog, `Leave request marked as ${status}`]);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask("");
    setActivityLog([...activityLog, `Added new task: ${newTask}`]);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    setActivityLog([...activityLog, `Marked task as ${updatedTasks[index].completed ? "Completed" : "Incomplete"}`]);
  };

  const handleDeleteTask = (index) => {
    const taskToRemove = tasks[index].task;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setActivityLog([...activityLog, `Deleted task: ${taskToRemove}`]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar1 />
        </div>
        <div className="col-md-9 p-4"style={{ padding: "20px", marginTop: "100px", marginBottom: "20px" }}>
          <h2 className="text-center mb-4">Employee Dashboard</h2>

          {/* Employee Profile */}
          <div className="card p-3 mb-4">
            <h5>Employee Profile</h5>
            <p><strong>Name:</strong> Shaik NagurBabu</p>
            <p><strong>Designation:</strong> Software Developer</p>
          </div>

          {/* Attendance & Leave Section */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card p-3">
                <h5>Attendance</h5>
                <button className="btn btn-primary me-2" onClick={handleLogin}>Login</button>
                <button className="btn btn-danger" onClick={() => setAttendance([])}>Reset</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-3">
                <h5>Apply for Leave</h5>
                <input 
                  type="text" 
                  className="form-control mb-2" 
                  placeholder="Enter reason"
                  value={leaveReason}
                  onChange={(e) => setLeaveReason(e.target.value)}
                />
                <button className="btn btn-warning" onClick={handleApplyLeave}>Apply</button>
              </div>
            </div>
          </div>

          {/* Tasks & Announcements Section */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card p-3">
                <h5>Task Management</h5>
                <input 
                  type="text" 
                  className="form-control mb-2" 
                  placeholder="New Task" 
                  value={newTask} 
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn btn-success mb-2" onClick={handleAddTask}>Add Task</button>
                <ul className="list-group">
                  {tasks.map((t, index) => (
                    <li key={index} className={`list-group-item ${t.completed ? "text-decoration-line-through" : ""}`}>
                      {t.task}
                      <button className="btn btn-sm btn-secondary mx-2 float-end" onClick={() => handleCompleteTask(index)}>
                        {t.completed ? "Undo" : "Complete"}
                      </button>
                      <button className="btn btn-sm btn-danger float-end" onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-3">
                <h5>Company Announcements</h5>
                <ul className="list-group">
                  {announcements.map((ann, index) => (
                    <li key={index} className="list-group-item">{ann}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Attendance Log */}
          <h5>Attendance Log</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Login</th>
                <th>Logout</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((log, index) => (
                <tr key={index}>
                  <td>{log.date}</td>
                  <td>{log.loginTime}</td>
                  <td>{log.logoutTime}</td>
                  <td>
                    {log.logoutTime === "N/A" && (
                      <button className="btn btn-danger btn-sm" onClick={() => handleLogout(index)}>
                        Logout
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Leave Requests */}
          <h5>Leave Requests</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.date}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  <td>
                    {leave.status === "Pending" && (
                      <>
                        <button className="btn btn-sm btn-success me-2" onClick={() => handleApproveLeave(index, "Approved")}>Approve</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleApproveLeave(index, "Rejected")}>Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
