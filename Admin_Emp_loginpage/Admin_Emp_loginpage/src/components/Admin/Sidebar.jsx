import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin.css'; 

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">Dashboard</div>
      <List>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/create-employee')}>
          <ListItemText primary="Create Employee" />
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/view-employees')}>
          <ListItemText primary="View Employees" />
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/create-project')}>
          <ListItemText primary="Create Project" />
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/view-projects')}>
          <ListItemText primary="View Projects" />
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/payroll')}>
          <ListItemText primary="Manage Payroll" />
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/attendance')}>
          <ListItemText primary="Track Attendance" />
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/reports')}>
          <ListItemText primary="View Reports" />
        </ListItem>
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/settings')}>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem button className="sidebar-item" onClick={() => handleNavigation('/admin/login')}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
