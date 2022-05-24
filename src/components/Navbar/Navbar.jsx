import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css"

// Images
import logo from "../../images/Navbar_logo_small.png"

function Navbar() {
    
    return(
        <section className="navbar">
            <nav className="firstList">
                <Link to="/"><img src={logo} alt="fetch green logo"/></Link>
                <Link to="/about">About</Link>
                <Link to="/mentors">Mentors</Link>
                <Link to="/news">News</Link>
            </nav>
            <nav className="secondList">
                <Link to="/profile:id">Profile</Link>
                <Link to="/articles/create">Create a Article</Link>
                <Link to="/login">Login</Link>
            </nav>
        </section>
    )
}


export default Navbar;