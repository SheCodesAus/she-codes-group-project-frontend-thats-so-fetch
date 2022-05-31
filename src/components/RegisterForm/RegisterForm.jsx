import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [credentials, setCredentials] = useState({
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password && credentials.password2) {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/user/register/`,
                    {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    }
                );
                const data = await response.json();
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("username", credentials.username);
                console.log(data)
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        }
    };


    return (


        <div>
        <div>
      <div>    
          
      <div>
      <div>
        <h1>Register</h1>
                         
        <h4>Join fetch today.</h4> 
        
      </div>
      
      </div>
      </div>


    
    <form className="login-form">
        <div className="form-item">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={handleChange}
                />
        </div>


        <div className="form-item">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />
        </div>

        <div className="form-item">
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    placeholder="Enter your First Name"
                    onChange={handleChange}
                />
            </div>

            <div className="form-item">
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    placeholder="Enter your Last Name"
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
                <label htmlFor="password2">Repeat Password:</label>
                <input
                    type="password"
                    id="password2"
                    placeholder="Repeat Password"
                    onChange={handleChange}
                />
            </div>

            <div className="form-item">
            <button className="button1" type="submit" onClick={handleSubmit}>
                Create Account
            </button>
            </div>

            
            
            

     

       
      



    </form>
    </div>
    </div>
    );
}

export default RegisterForm;