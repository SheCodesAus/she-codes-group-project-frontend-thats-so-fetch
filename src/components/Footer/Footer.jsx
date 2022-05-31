import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Footer.css"

// Images
import logo from "../../images/Footer_logo_small.png"
import Facebook from "../../images/Facebook_icon.png"
import LinkedIn from "../../images/LinkedIn_icon.png"
import Twitter from "../../images/Twitter_icon.png"

function Footer() {
    
    return(
        <section className="footer">
                <div className="logo-container">
                    <Link to="/"><img src={logo} alt="fetch logo purple"/></Link>
                </div>
                <div className="column-left">
                    <Link to="https://www.facebook.com/"><img src={Facebook} alt="facebook logo" width="25px"/></Link>
                    <Link to="https://www.linkedin.com/home"><img src={LinkedIn} alt="linkedin logo" width="25px"/></Link>
                    <Link to="https://twitter.com/i/flow/login"><img src={Twitter} alt="twitter logo" width="30px"/></Link>
                </div>
                <div className="column-middle">
                    <Link to="/news">News</Link>
                    <Link to="/mentors">Mentors</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="column-right">
                    <p>Fetch wish to acknowledge the traditional custodians of the land
                        we are working on, the Whadjuk people. We wish to acknowledge 
                        and respect their continuing culture and the contribution they 
                        make to the life of this city and this region. <br /><br />
                        © 2022 Fetch</p>
                </div>
        </section>
    )
}


export default Footer;