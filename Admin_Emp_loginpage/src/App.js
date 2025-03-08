import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import AppRoutes from "./routes";
import "./styles/Global.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      
    </Router>
  );
};

export default App;
