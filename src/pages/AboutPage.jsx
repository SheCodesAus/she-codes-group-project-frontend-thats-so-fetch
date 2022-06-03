import React from "react";

//image
import team from "../images/fetchteam.png";

// Style
import "./Aboutpage.css";

function AboutPage() {
  return (
    <div className="about">
      <div class="container">
        <img class="banner" src={team} alt="team image" />
      </div>
      <h1 className="heading">SHOWCASING DIVERSE ROLE MODELS IN TECH</h1>
      <p>
        For this project we were assigned into teams of 5 people, Given a topic
        and assigned a client
        <br></br>
        <br></br>
        Our Team Consisted of: Monelle, Khia, Janine, Suelee & Tracy
        <br></br>
        <br></br>
        Our topic was to design a platform where a community of diverse
        individuals connect with mentors ... amazing women and non-binary folk.
        A site where you can create a profile, publish news about yourself and
        your work and make connections with like-minded people. Our aim is to
        inspire, present and connect people differently in Tech.
        <br></br>
        <br></br>
        We worked with our client Samuel McCulloch.. An Apex Developer at
        Bunnings to develop a MVP (Minimum Viable Product) website. This website
        is our group project for She Codes Perth Cohort 2022. Our group name
        was...
        <br></br>
        <br></br>
        Thats so Fetch!
        <br></br>
        <br></br>
        We incorporated Fetch as the name and logo of our site FETCH: Fresh and
        engaged in TeCH
        <br></br>
        <br></br>
        Within our MVP we listed our scope requirements, wireframes as well as
        our base features and functionality required by the client. It evolved
        and grew throughout the project enabling the whole team to
        collaboratively work together. In the limited time we had, we were able
        to create a base product but would have loved to have provided the
        client with a website that met all his requirements. There are many
        additional features we would have liked to add.
        <br></br>
        <br></br>
        Trying to juggle full time work, family and coding provided many of us
        with timekeeping challenges.... but we are proud of what we have learnt
        and achieved in such a short time. One of our biggest learning curves
        was learning to work collaboratively using github, by creating different
        branches testing new code and merging it back into our main branch. This
        proved to be one of our biggest issues in the beginning and showed us
        how important it was to communicate.
        <br></br>
        <br></br>
        Thankyou for sharing this journey with us and thankyou to all the
        Mentors for sharing your time and knowledge!
      </p>
    </div>
  );
}

export default AboutPage;
