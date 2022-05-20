import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css"

// Images
import logo from "../../images/Navbar_logo.png"

function Navbar() {
    
    return(
        <nav>
            <div className="logoDiv">
                <Link className="logo" to="/"><img className="logo" src={logo}/></Link>
            </div>
            <ul className="firstList">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/mentors">Mentors</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
            <ul className="secondList">
            <li><Link to="/profile:id">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;