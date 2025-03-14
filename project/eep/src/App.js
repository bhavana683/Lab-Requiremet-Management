/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabRequirementManagement from './LabRequirementManagement'; // Assuming this path is correct
import SignIn from './SignIn';
 // Assuming SignIn is another component
 import SignUp from './SignUp';
 import AdminDashboard from "./AdminDashboard";
 import ViewHistory from "./ViewHistory";
 import LabUpdate from "./LabUpdate";
 import IssueUpdate from "./IssueUpdate";
 import DashboardHome from "./DashboardHome";
import ResetPassword from './ResetPassword';
 


const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<LabRequirementManagement />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} /> 
          <Route path="view-history" element={<ViewHistory />} />
          <Route path="lab-update" element={<LabUpdate />} />
          <Route path="issue-update" element={<IssueUpdate />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;*/
/*'use client';
import React from "react";

const Technician = () => {
  return (
    <div style={styles.container}>

      <header style={styles.header}>
        <h1 style={styles.title}>Admin</h1>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile Icon"
          style={styles.profileIcon}
        />
      </header>

      <nav style={styles.navbar}>
        <button style={styles.navButton}>Accept</button>
        <button style={styles.navButton}>ViewHistory</button>
        <button style={styles.navButton}>Lab Updates</button>
        <button style={styles.navButton}>Issue Updates</button>
      </nav>

      <main style={styles.mainContent}>
        <h2 style={styles.welcomeText}>Welcome, Technician!</h2>
        <p style={styles.description}>
        </p>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundImage: "url('technician_homepage.jpg') ",

    backgroundSize: "cover",
    height: "100vh",
    color: "#333",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
    borderBottom: "1px solid #ccc",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid #333",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "20px 0",
  },
  navButton: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#4CAF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  mainContent: {
    textAlign: "center",
    marginTop: "20px",
  },
  welcomeText: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    width: "80%",
    margin: "0 auto",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Technician;*/

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabRequirementManagement from './LabRequirementManagement'; // Assuming this path is correct
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdminDashboard from './components/Admin/AdminDashboard';  // Correct path
import ViewHistory from './components/Admin/ViewHistory';  // Correct path
import LabUpdate from './components/Admin/LabUpdate';  // Correct path
import IssueUpdate from './components/Admin/IssueUpdate';  // Correct path
import DashboardHome from './components/Admin/DashboardHome';  // Correct path

import ResetPassword from './ResetPassword.js';

import Labincharge from 'components/Labincharge/Labincharge';
import Dashboard from './components/Labincharge/Dashboard';
import IssUpdate from './components/Labincharge/IssUpdate';
import UploadIssue from 'components/Labincharge/UploadIssue';
import InViewHistory from 'components/Labincharge/InViewHistory';
import InLabUpdate from 'components/Labincharge/InLabUpdate';

import Technician from 'components/Technician/Technician';
import Accept from 'components/Technician/Accept';
import TechDashboard from 'components/Technician/TechDashboard';
import TechIssueUpdate from 'components/Technician/TechIssueUpdate';
import  TechViewHistory from 'components/Technician/TechViewHistory';
import TechLabUpdate from 'components/Technician/TechLabUpdate'

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<LabRequirementManagement />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        
        {/* Admin route with nested routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} /> 
          <Route path="view-history" element={<ViewHistory />} />
          <Route path="lab-update" element={<LabUpdate />} />
          <Route path="issue-update" element={<IssueUpdate />} />
        </Route>

        <Route path="/incharge" element={<Labincharge />}>
          <Route index element={<Dashboard/>} /> 
          <Route path="inview_history" element={<InViewHistory />} />
          <Route path="inlab-update" element={<InLabUpdate />} />
          <Route path="inissue-update" element={<IssUpdate />} />
          <Route path="inupload-issue" element={<UploadIssue />} />
        </Route>

        <Route path="/technician" element={<Technician />}>
          <Route index element={<TechDashboard/>} /> 
          <Route path="accept" element={<Accept/>} />
          <Route path="techviewhi" element={<TechViewHistory />} />
          <Route path="techlab-update" element={< TechLabUpdate/>} />
          <Route path="techissue-update" element={<TechIssueUpdate />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
