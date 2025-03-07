import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaCalendarCheck, FaMoneyBill, FaSuitcase, FaProjectDiagram, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../../styles/EmployeeDashboard.css";

const Sidebar1 = () => {
  return (
    <div className="sidebar">
      <h3>Employee Dashboard</h3>
      <ul>
        <li>
          <NavLink to="/employee/profile" activeClassName="active">
            <FaUser className="icon" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/attendance" activeClassName="active">
            <FaCalendarCheck className="icon" />
            Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/salary" activeClassName="active">
            <FaMoneyBill className="icon" />
            Salary
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/leaves" activeClassName="active">
            <FaSuitcase className="icon" />
            Leaves
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/projects" activeClassName="active">
            <FaProjectDiagram className="icon" />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/settings" activeClassName="active">
            <FaCog className="icon" />
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName="active">
            <FaSignOutAlt className="icon" />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar1;
