/*import React, { useState } from 'react';
import 'styles/InView.css';// Import the CSS file

const InViewHistory = () => {
  

  const [selectedDate, setSelectedDate] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [solvedBy, setSolvedBy] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleIssueDescriptionChange = (e) => {
    setIssueDescription(e.target.value);
  };

  const handleSolvedByChange = (e) => {
    setSolvedBy(e.target.value);
  };

  return (
    <div className="invcontainer">
      <h2 className="header">View History</h2>
      <div className="historyBox">
        <div className="section">
          <textarea
            value={issueDescription}
            onChange={handleIssueDescriptionChange}
            className="textarea"
            placeholder="Issue description"
          />
        </div>
        <div className="section">
          <textarea
            value={solvedBy}
            onChange={handleSolvedByChange}
            className="textarea"
            placeholder="Solved by - lab number"
          />
        </div>
        <div className="section">
          <span className="label">Day of Issue</span>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};


  return (
    <div>
      <h3>View History</h3>
      <p>This is the View History page. Here you can see the activity logs.</p>
    </div>
  );
};

export default InViewHistory;*/


import React, { useState, useEffect } from "react";
import axios from "axios";
import "styles/InView.css";

const InViewHistory = () => {
  const [issues, setIssues] = useState([]);
  const [expandedIssue, setExpandedIssue] = useState(null); // Stores the currently expanded issue ID

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get("http://localhost:7001/api/auth/inviewhistory");
        setIssues(response.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, []);

  const toggleExpand = (issueId) => {
    setExpandedIssue(expandedIssue === issueId ? null : issueId); // Toggle expand/collapse
  };

  return (
    <div className="invcontainer">
      <h2 className="header">View History</h2>

      {/* Dynamically generate containers based on issues */}
      {issues.length > 0 ? (
        issues.map((issue, index) => (
          <div key={index} className="issueContainer">
            <button className="issueButton" onClick={() => toggleExpand(issue._id)}>
              {issue.issue || `Issue #${index + 1}`}
            </button>

            {/* Expand issue details dynamically */}
            {expandedIssue === issue._id && (
              <div className="historyBox">
                <div className="section">
                  <span className="label">Description</span>
                  <textarea value={issue.description || "No description"} readOnly className="textarea" />
                </div>
               

                <div className="section">
                  <span className="label">Solved By</span>
                  <textarea value={issue.solvedBy || "Unknown"} readOnly className="textarea" />
                </div>
                <div className="section">
                  <span className="label">Date</span>
                  <input type="date" value={issue.createdAt?.substring(0, 10) || ""} readOnly className="input" />
                </div>
                <div className="details">
                  <h3>Full Issue Details:</h3>
                  <ul>
                    <li><strong>Lab:</strong> {issue.labNo || "N/A"}</li>
                    <li><strong>Status:</strong> {issue.status || "Pending"}</li><li><strong>Status:</strong> {issue.postedBy || "incharge"}</li>
                    <li><strong>Status:</strong> {issue.status || "Pending"}</li>

                  </ul>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No issues found.</p>
      )}
    </div>
  );
};

export default InViewHistory;
