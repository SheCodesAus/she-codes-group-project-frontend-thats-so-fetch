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
                    `${process.env.REACT_APP_API_URL}user/register/`,
                    {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: credentials.username,
                            email: credentials.email,
                            password: credentials.password,
                            first_name: credentials.first_name,
                            last_name: credentials.last_name,
                            is_mentor: false,
                            is_student: false,
                            profile_photo: "https://homecorpfinance.com.au/wp-content/uploads/2020/06/female_avatar.jpg",
                            banner_photo: "https://t3.ftcdn.net/jpg/04/19/06/66/360_F_419066648_CBc58ZxOdT8kzaxuHi3OQUWrqtblMzEP.jpg",
                            location: "Unknown",
                            social_link: "https://thawing-sierra-22554.herokuapp.com/",
                            bio: "An amazing bio is still in production.",
                            coffee: false,
                            mentoring: false,
                            tutoring: false,
                            public_speaking: false
                        }),
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
        <h1>Want to be part of the Fetch community?</h1>               
        <h2>Register below:</h2> 
    
    <form>
        <div className="field">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Enter Username"
                onChange={handleChange}/>
        </div>


        <div className="field">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={handleChange}/>
        </div>

        <div className="field">
                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    placeholder="Enter your First Name"
                    onChange={handleChange}/>
            </div>

            <div className="field">
                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    placeholder="Enter your Last Name"
                    onChange={handleChange}/>
            </div>

            <div className="field">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}/>
            </div>

            <div className="field">
                <label htmlFor="password2">Repeat Password:</label>
                <input
                    type="password"
                    id="password2"
                    placeholder="Repeat Password"
                    onChange={handleChange}
                />
            </div>

            <div className="field">
            <button type="submit" onClick={handleSubmit}>
                Create Account
            </button>
            </div>

            
            
            

     

       
      



    </form>
    </div>
    </div>
    );
}

export default RegisterForm;