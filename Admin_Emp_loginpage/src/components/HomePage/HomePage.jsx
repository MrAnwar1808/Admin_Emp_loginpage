import React from "react";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

const HomePage = () => {
  return (
    <div className="home-container container-fluid py-4 bg-light" style={{ padding: "20px", marginTop: "70px", marginBottom: "20px" }}>
      
      
      <header className="header text-center text-white py-4 bg-dark rounded mb-4 animate__animated animate__fadeIn">
        <h1>Welcome to the Admin & Employee Dashboard</h1>
        <p className="lead">Manage users, tasks, reports, and company operations efficiently.</p>
      </header>

  
      <div className="row gx-4 gy-4">
        
        <div className="col-md-6">
          <div className="card bg-primary text-white p-4 rounded shadow animate__animated animate__slideInLeft">
            <h2>Admin Panel</h2>
            <p>Oversee employee records, generate reports, and manage company settings.</p>
            <a href="/admin/login" className="btn btn-light">Go to Admin Panel</a>
            <div className="row mt-3">
              {["Active Admins", "Pending Approvals", "Completed Reports", "New Requests"].map((item, index) => (
                <div key={index} className="col-6 my-2" style={{ flex: "0 0 auto", width: "31%" }}>
                  <div className="stat-box text-center p-3 bg-white text-dark rounded shadow">
                    <h3>{[10, 50, 200, 30][index]}</h3>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="col-md-6">
          <div className="card bg-danger text-white p-4 rounded shadow animate__animated animate__slideInRight">
            <h2>Employee Panel</h2>
            <p>Monitor work schedules, tasks, and performance evaluations.</p>
            <a href="/employee/login" className="btn btn-light">Go to Employee Panel</a>
            <div className="row mt-3">
              {["Total Employees", "Tasks in Progress", "Completed Tasks", "New Employees"].map((item, index) => (
                <div key={index} className="col-6 my-2" style={{ flex: "0 0 auto", width: "31%" }}>
                  <div className="stat-box text-center p-3 bg-white text-dark rounded shadow">
                    <h3>{[150, 20, 500, 15][index]}</h3>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
      <div className="recent-activities mt-5 p-4 bg-white rounded shadow animate__animated animate__fadeIn">
        <h2 className="text-center">Recent Activities</h2>
        <ul className="list-group">
          {["New employee registered", "Salary disbursed", "Monthly report generated", "Admin approved a request", "Training session scheduled"].map((activity, index) => (
            <li key={index} className="list-group-item">{activity}</li>
          ))}
        </ul>
      </div>

     
      <div className="announcements text-center mt-5 p-4 bg-info text-white rounded shadow animate__animated animate__fadeIn">
        <h2>Company Announcements</h2>
        <p>Stay updated with the latest news and events.</p>
        <ul className="list-group bg-info">
          {["Holiday on 25th December", "Annual performance review next month", "New attendance policy implemented"].map((announcement, index) => (
            <li key={index} className="list-group-item bg-light text-dark">{announcement}</li>
          ))}
        </ul>
      </div>

     
      <div className="quick-links text-center mt-5 p-4 bg-secondary text-white rounded shadow animate__animated animate__fadeIn">
        <h2>Quick Links</h2>
        <p>Navigate through the essential features of the dashboard quickly.</p>
        <div className="row mt-3">
          {["Attendance", "Payroll", "Leave Requests", "Reports", "Settings", "Performance", "Help Desk", "Training", "Events"].map((link, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 my-2">
              <a href={`/${link.toLowerCase().replace(" ", "-")}`} className="btn btn-light w-100 p-2 shadow-sm animate__animated animate__zoomIn">{link}</a>
            </div>
          ))}
        </div>
      </div>

      
      <div className="performance-insights text-center mt-5 p-4 bg-success text-white rounded shadow animate__animated animate__fadeIn">
        <h2>Performance Insights</h2>
        <p>Track key metrics and performance trends.</p>
        <div className="row mt-3">
          {["Productivity Score", "Average Task Completion", "Customer Satisfaction", "Project Success Rate"].map((metric, index) => (
            <div key={index} className="col-md-3 col-sm-6 my-2">
              <div className="stat-box text-center p-3 bg-light text-dark rounded shadow">
                <h3>{[85, "92%", "88%", "95%"][index]}</h3>
                <p>{metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="support-section text-center mt-5 p-4 bg-warning text-dark rounded shadow animate__animated animate__fadeIn">
        <h2>Need Help?</h2>
        <p>Reach out to our support team for assistance.</p>
        <a href="/support" className="btn btn-dark">Contact Support</a>
      </div>
    </div>
  );
};

export default HomePage;
