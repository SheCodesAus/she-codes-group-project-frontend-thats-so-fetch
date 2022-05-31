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

    <div>
      <h2><br />Please enter your email to log in</h2>    
      <form>
        <div className="field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={handleChange}/>
        </div>
    
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}/>
        </div>

        <div className="field">
        <button type="submit" onClick={handleSubmit}>LOGIN</button>
        </div>

      </form>

    </div>
    
    
    );
}

export default LoginForm;