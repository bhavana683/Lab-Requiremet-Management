import React, { useState } from 'react';
import 'styles/TechView.css'; // Import the CSS file

const Accept = () => {
  return (
    <div>
      <div className="techcontainer">
          <h2 className="header">Accept an issue</h2>
          <div className="historyBox">
            <div className="section">
              <textarea
               
                
                className="textarea"
                placeholder="Issue description posted by incharge"
              />
            </div>
            
            <div className="section">
             
              <button  className="button">
        Accept
      </button >
            </div>
          </div>
        </div>
    </div>
  );
};

export default Accept;
