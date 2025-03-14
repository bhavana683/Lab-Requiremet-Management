import React, { useState } from 'react';
 import 'styles/TechView.css';// Import the CSS file

const TechViewHistory = () => {

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
     <div className="techcontainer">
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
 
 
 
 

export default TechViewHistory;
