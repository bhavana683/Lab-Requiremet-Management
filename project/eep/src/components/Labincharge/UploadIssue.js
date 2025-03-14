'use client';
import React, { useState } from 'react';
 // Import the CSS file
 import 'styles/InUpload.css'; 

const UploadIssue = () => {

  const [issue, setIssue] = useState('');
  const [requirement, setRequirement] = useState('');
  const [labNo, setLabNo] = useState('');
  const [issueTime, setIssueTime] = useState('');
  const [issueIdentifiedBy, setIssueIdentifiedBy] = useState('');

  const handlePost = () => {
    if (!issue || !requirement || !labNo || !issueTime || !issueIdentifiedBy) {
      alert('Please fill all fields before posting.');
    } else {
      alert(`Posted:
Issue: ${issue}
Requirement: ${requirement}
Lab No: ${labNo}
Issue Time: ${issueTime}
Issue Identified By: ${issueIdentifiedBy}`);
    }
  };

  return (
    <div className="incontainer">
      <input
        type="text"
        placeholder="Issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Requirement"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Lab No"
        value={labNo}
        onChange={(e) => setLabNo(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Issue Time"
        value={issueTime}
        onChange={(e) => setIssueTime(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Issue Identified By"
        value={issueIdentifiedBy}
        onChange={(e) => setIssueIdentifiedBy(e.target.value)}
        className="input"
      />
      <br />
      <button onClick={handlePost} className="button">
        Post
      </button>
    </div>
  );
};




export default UploadIssue;
