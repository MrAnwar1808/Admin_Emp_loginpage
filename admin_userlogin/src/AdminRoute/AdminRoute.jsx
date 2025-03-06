

import { Routes, Route, Navigate } from "react-router-dom"; 
import AdminDashboard from "./AdminDashboard";
import CreateEmployee from "../Admin/Employeepages/CreateEmployee";
import ViewEmployees from "../Admin/Employeepages/ViewEmployees";
import CreateProject from "../Admin/Projects/CreateProject";
import ViewProjects from "../Admin/Projects/ViewProjects";
import ProjectAssignment from "../Admin/Projects/ProjectAssign";
import Payroll from "../Admin/Payroll/Payroll";
import PayrollHistory from "../Admin/Payroll/PayrollHistory";
import Attendance from "../Admin/Payroll/Attendance";
import LeaveRequests from "../Admin/Payroll/LeaveRequests";
import Reports from "../Admin/Payroll/Reports";
import SystemLogs from "../Admin/Payroll/SystemLogs";
import SecurityAudits from "../Admin/Payroll/SecurityAudits";
import Benefits from "../Admin/Payroll/Benefits";
import Policies from "../Admin/Payroll/Policies";
import Settings from "../Admin/Payroll/Settings";

const AdminRoutes = () => {
  return (
    <Routes>
  
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create-employee" element={<CreateEmployee />} />
        <Route path="/admin/view-employees" element={<ViewEmployees />} />
        <Route path="/admin/create-project" element={<CreateProject />} />
        <Route path="/admin/view-projects" element={<ViewProjects />} />
        <Route path="/admin/project-tracker" element={<ProjectAssignment />} />
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
        

    </Routes>
  );
};

export default AdminRoutes;








 