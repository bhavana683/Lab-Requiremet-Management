import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LabRequirementManagement = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSelection = () => {
    if (!userType) {
      setErrorMessage('Please select a user type before proceeding.');
    } else {
      setErrorMessage('');
      navigate('/SignUp'); // Navigate to SignIn page
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url(/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h1 style={{ color: 'red' }}>Lab Requirement Management</h1>
      <select
        id="options"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        style={styles.select}
        aria-label="User type selection"
      >
        <option value="" disabled>
          Select User Type
        </option>
        <option value="Technician">Technician</option>
        <option value="Lab Incharge">Lab Incharge</option>
        <option value="Admin">Admin</option>
        <option value="SubAdmin">SubAdmin</option>
      </select>
      <br />
      <button onClick={handleSelection} style={styles.button}>
        Ok
      </button>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
    </div>
  );
};

const styles = {
  select: {
    fontSize: '16px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
  },
  button: {
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  error: {
    color: 'yellow',
    marginTop: '10px',
  },
};

export default LabRequirementManagement;
