// src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSignup from "./components/Admin/AdminSignup";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import CreateEmployee from "./components/Admin/CreateEmployee";
import ViewEmployees from "./components/Admin/ViewEmployees";
import PostJob from "./components/Admin/PostJob";
import ViewJobs from "./components/Admin/ViewJobs";
import AssignProject from "./components/Admin/AssignProject"; // Import the new component
import EmployeeLogin from "./components/Employee/EmployeeLogin";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import CreateProject from "./components/Admin/CreateProject";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/create-employee" element={<CreateEmployee />} />
      <Route path="/admin/view-employees" element={<ViewEmployees />} />
      <Route path="/admin/post-job" element={<PostJob />} />
      <Route path="/admin/view-jobs" element={<ViewJobs />} />
      <Route path="/admin/assign-project" element={<AssignProject />} />
      <Route path="/admin/create-project" element={<CreateProject />} />

      {/* Employee Routes */}
      <Route path="/employee/login" element={<EmployeeLogin />} />
      <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
