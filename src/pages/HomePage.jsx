import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

// Style
import "./HomePage.css";

function HomePage() {
    return (
        <main>
        <h1>Fresh and engaged in Tech - Is this you?<br></br>This is Fetch!</h1>   
        <section className="introduction">
                <article className="left-section">
                    <p>Too many times do we hear young people ask us "can women be software engineers?"
                    or comments like "there is no one in tech who looks like me".</p>
                    <p> <span className="highlight">Fetch is trying to change that.</span></p>
                    <p>Here is a platform where you can create a profile, publish news about you and your work,
                    make connections with like-minded people. <br/>We want to inspire, present and connect people differently. Join us!<br />
                    </p>
                </article>
                <article className="right-section">
                    <Link to="/news" className="action-button">What's up? Read the News</Link>
                    <Link to="/mentors" className="action-button">Check out our Mentors</Link>
            </article>
        </section>
        </main>
    )
}

export default HomePage;