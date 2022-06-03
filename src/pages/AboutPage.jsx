import React from "react";

//image
import team from '../images/fetchteam.png';

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
        Our topic was to design a platform the community can create profiles of
        women and non-binary folkwhere you can create a profile, publish news
        about you and your work, make connections with like-minded people. We
        want to inspire, present and connect people differently in Tech.
        <br></br>
        <br></br>
        We worked with our client Samuel McCulloch.. An Apex Developer at
        Bunnings to develop a MVP (Minimum Viable Product) website. This website
        is our group project for She Codes Perth Cohort 2022 Our group, was
        named Thats so Fetch!, a name we have used as an acronym for our site
        FETCH: Fresh and engaged in TeCH
        <br></br>
        <br></br>
        Within our MVP we listed our scope requirements, wireframes as well as
        our base features and functionality required by the client. In the
        limited time we had we were able to create a base product but would have
        loved to have provided the client with a website that met all his
        requirements. There are many additional features we would have liked to
        add.
        <br></br>
        <br></br>
        Trying to juggle full time work and coding provided many of us with
        timekeeping challenges.... but we are proud of what we have learnt and
        achieved in such a short time. One of our biggest learning curves was
        learning to work collaboratively using github, by creating different
        branches testing new code and merging it back into our main branch. This
        proved not to be that simple in the beginning.
      </p>
    </div>
  );
}

export default AboutPage;
