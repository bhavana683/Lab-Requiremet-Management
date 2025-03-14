
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import ResetPassword from './ResetPassword.js'; // Correct path to ResetPassword.js

const SignIn = () => {
  const navigate = useNavigate();
  
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateBasedOnRole = (role) => {
  
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "incharge") {
      navigate("/incharge");
    } else if (role === "technician") {
      navigate("/technician");
    } /*else if (role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/"); // Default route if role is unknown
    }*/
  };

  async function  handleSignIn (e) {
    e.preventDefault();
    console.log('Sign-In with', { username, password });
    try
    {
      const response=await axios.post("http://localhost:7001/api/auth/login",{
        username,
        password
      },{
        headers:{
          "Content-Type":"application/json"
        },withCredentials:true
      })
      console.log("login successful");
      const{token,user}=response.data
      localStorage.setItem("token", token);
    localStorage.setItem("role", user.role);

    // Redirect based on role
    navigateBasedOnRole(user.role);
    }
    catch(err){
    console.log(err)
    }
   
  };

  const handleGoogleSignIn = () => {
    console.log('Sign-In with Google');
  };

  const handleSignUp = () => {
    console.log('Navigate to Sign-Up Page');
    navigate('/SignUp' );
  };





  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Sign In </h2>
        <form  ation="POST"onSubmit={handleSignIn} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.link} onClick={()=>{
            navigate('/ResetPassword')
          }}>Forgot password?</div>
            
          
          <div style={styles.actionsRow}>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              style={{ ...styles.roundedButton, backgroundColor: '#28a745' }}
            >
              Google
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              style={{ ...styles.roundedButton, backgroundColor: '#FF7F50' }}
            >
              Sign Up
            </button>
          </div>
          <button
            type="submit"
            onClick={handleSignIn}
            style={{
              ...styles.roundedButton,
              backgroundColor: '#FF7F50',
              marginTop: '20px',
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );}
  const styles = {
    page: {
      backgroundColor: '#f7f8fa',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      maxWidth: '400px',
      padding: '30px',
      backgroundColor: '#ffffff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputGroup: {
      marginBottom: '15px',
      textAlign: 'left',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    link: {
      marginTop: '10px',
      color: '#007BFF',
      textDecoration: 'none',
      fontSize: '14px',
      alignSelf: 'flex-start',
    },
    actionsRow: {
      marginTop: '15px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    roundedButton: {
      flex: 1,
      padding: '10px',
      margin: '5px',
      border: 'none',
      borderRadius: '50px', 
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
};


export default SignIn;
