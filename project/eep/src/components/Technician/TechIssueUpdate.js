'use client';
    import React, { useState } from 'react';
    import 'styles/TechView.css'; // Import the CSS file
 

const TechIssueUpdate = () => {
  
      const [numberOfDays, setNumberOfDays] = useState('');
      const [issueDescription, setIssueDescription] = useState('');
      const [solvedBy, setSolvedBy] = useState('');
      const [acceptedBy, setAcceptedBy] = useState('');
      const post="post update"
    
      const handleNumberOfDaysChange = (e) => {
        setNumberOfDays(e.target.value);
      };
    
      const handleIssueDescriptionChange = (e) => {
        setIssueDescription(e.target.value);
      };
    
      const handleSolvedByChange = (e) => {
        setSolvedBy(e.target.value);
      };
    
      const handleAcceptedByChange = (e) => {
        setAcceptedBy(e.target.value);
      };
    
      return (
        <div className="techcontainer">
          <h2 className="header">Issue Update</h2>
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
              <span className="label">Number of Days of Issue</span>
              <input
                type="number"
                value={numberOfDays}
                onChange={handleNumberOfDaysChange}
                className="input"
                placeholder="Enter number of days"
                min="1"
              />
            </div>
            <div className="section">
              <textarea
                value={acceptedBy}
                onChange={handleAcceptedByChange}
                className="textarea"
                placeholder="progress of issue"
              />
            </div>
            <div className="section">
             
              <button  className="button">
        post issue updtae
      </button >
            </div>
          </div>
        </div>
      );
    };
    
  

export default TechIssueUpdate;
