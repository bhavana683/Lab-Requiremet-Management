   
'use client';
 import React, { useState } from 'react';
 import 'styles/TechView.css';  // Import the CSS file

const TechLabUpdate = () => {
 

 
 
   const [updateInfo, setUpdateInfo] = useState('');
   const [selectedDay, setSelectedDay] = useState('');
 
   const handleUpdate = (e) => {
     const fieldName = e.target.name;
     const value = e.target.value;
 
     if (fieldName === 'updateInfo') {
       setUpdateInfo(value);
     } else if (fieldName === 'selectedDay') {
       setSelectedDay(value);
     }
 
     if (updateInfo && selectedDay) {
       console.log(`Update Info: ${updateInfo}, Day: ${selectedDay}`);
     }
   };
 
   return (
     <div className="techcontainer">
       <h2 className="header">Lab Update</h2>
 
       <div className="fieldsContainer">
         <textarea
           name="updateInfo"
           placeholder="Update Info"
           value={updateInfo}
           onChange={handleUpdate}
           className="textarea"
         />
 
         <select
           name="selectedDay"
           value={selectedDay}
           onChange={handleUpdate}
           className="select"
         >
           <option value="" disabled>
             Select Day
           </option>
           <option value="Monday">Monday</option>
           <option value="Tuesday">Tuesday</option>
           <option value="Wednesday">Wednesday</option>
           <option value="Thursday">Thursday</option>
           <option value="Friday">Friday</option>
           <option value="Saturday">Saturday</option>
           <option value="Sunday">Sunday</option>
         </select>
       </div>
     </div>
   );
 };
 
 
 
 

export default TechLabUpdate;
