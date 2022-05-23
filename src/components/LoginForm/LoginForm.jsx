import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// Styles
import '../../pages/forms.css';

import { Link } from "react-router-dom";


function LoginForm() {
  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };


// ALEX'S VERSION:
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api-token-auth/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        const data = await response.json();
        console.log(data)
        window.localStorage.setItem("token", data.token);
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (


  

    <div className="form">
    <form className="login-form"> 
    <div className="form-item">
    <h1>Get Started</h1>
    <h2>Welcome to Fetch!</h2> 
        <label htmlFor="username">Username:</label>

        <input className="form"
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>

      <div className="form-item">
        <div className="vertical-center">
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      </div>
      </div>

    </form>
    </div>

    
    );
}

export default LoginForm;