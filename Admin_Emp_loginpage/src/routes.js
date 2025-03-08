import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminSignup from "./components/Admin/AdminSignup";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import EmployeeLogin from "./components/Employee/EmployeeLogin";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import CreateEmployee from "./Admin/Employeepages/CreateEmployee";
import ViewEmployees from "./Admin/Employeepages/ViewEmployees";
import CreateProject from "./Admin/Projects/CreateProject";
import ViewProjects from "./Admin/Projects/ViewProjects";
import ProjectAssignment from "./Admin/Projects/ProjectAssign";
import Payroll from "./Admin/Payroll/Payroll";
import PayrollHistory from "./Admin/Payroll/PayrollHistory";
import Attendance from "./Admin/Payroll/Attendance";
import LeaveRequests from "./Admin/Payroll/LeaveRequests";
import Reports from "./Admin/Payroll/Reports";
import SystemLogs from "./Admin/Payroll/SystemLogs";
import SecurityAudits from "./Admin/Payroll/SecurityAudits";
import Benefits from "./Admin/Payroll/Benefits";
import Policies from "./Admin/Payroll/Policies";
import Settings from "./Admin/Payroll/Settings";
import ScheduleInterview from "./components/scheduleinterview";

import HomePage from "./components/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />

      
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/create-employee" element={<CreateEmployee />} />
      <Route path="/admin/view-employees" element={<ViewEmployees />} />
      <Route path="/admin/create-project" element={<CreateProject />} />
      <Route path="/admin/view-projects" element={<ViewProjects />} />
      <Route path="/admin/assign-project" element={<ProjectAssignment />} />
      <Route path="/admin/payroll" element={<Payroll />} />
      <Route path="/admin/payroll-history" element={<PayrollHistory />} />
      <Route path="/admin/attendance" element={<Attendance />} />
      <Route path="/admin/leave-requests" element={<LeaveRequests />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/system-logs" element={<SystemLogs />} />
      <Route path="/admin/security-audits" element={<SecurityAudits />} />
      <Route path="/admin/benefits" element={<Benefits />} />
      <Route path="/admin/policies" element={<Policies />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/schedule-interview" element={<ScheduleInterview />} />

      
      <Route path="/employee/login" element={<EmployeeLogin />} />
      <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
