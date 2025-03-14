

import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";  // Import Outlet for nested routing
import "styles/Admin.css"; // Adjusted import path

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("DashboardHome");

  return (
    <div className="admin-container">
      <header className="header">
        <h1 className="title">Admin</h1>
        <img
          src="https://images.app.goo.gl/rA6LrAvnai97zqrK7"
          alt="Profile Icon"
          className="profileIcon"
        />
      </header>

      <nav className="navbar">
      <Link to="/admin">
          <button className="navButton">Home</button>
        </Link>
        <Link to="view-history">
          <button className="navButton">View History</button>
        </Link>
        <Link to="lab-update">
          <button className="navButton">Lab Update</button>
        </Link>
        <Link to="issue-update">
          <button className="navButton">Issue Update</button>
        </Link>
      </nav>

      <main className="mainContent">
        <h2 className="welcomeText">Welcome, Admin!</h2>
        <div className="description">
        {/* Outlet will render the child routes */}
        <div className="dynamic-content">
          <Outlet />
        </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

