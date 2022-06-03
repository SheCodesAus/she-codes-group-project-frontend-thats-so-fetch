import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Style
import "./HomePage.css";

// Components
import MentorCard from "../components/MentorCard/MentorCard";

// Import dummy data
// import { allArticles } from "../fakeData";
// import { allProfiles } from "../fakeData";

function HomePage() {
  // State
  const [mentorList, setMentorList] = useState([]);
  const [articleList, setArticleList] = useState([]);
  //   we will need to work out how to now see the passwords of the user in inspect tool

  // Again have changed mentorData and articleData to mentordata and articledatat with lower case 'd' this has solved an issue with the DOM
  // I'm aware that we have always done it with the capital - so I'm not sure what this has worked. but yay/
  // Actions and Helpers FOR MENTOR DATA
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}user/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // console.log(data);
        setMentorList(data);
      });
  }, []);

  // Actions and Helpers for ARTICLE DATA
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}articles/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // console.log(data);
        setArticleList(data);
      });
  }, []);

  return (
    <div>
      <main>
        <h1>
          Fresh and engaged in Tech - Is this you?<br></br>This is Fetch!
        </h1>
        <section className="introduction">
          <article className="left-section">
            <p>
              Too many times do we hear young people ask us "can women be
              software engineers?" or comments like "there is no one in tech who
              looks like me".
            </p>
            <p>
              {" "}
              <span className="highlight">Fetch is trying to change that.</span>
            </p>
            <p>
              Here is a platform where you can create a profile, publish news
              about you and your work, make connections with like-minded people.{" "}
              <br />
              We want to inspire, present and connect people differently. Join
              us!
              <br />
            </p>
          </article>
          <article className="right-section">
            <Link to="/news" className="action-button">
              What's up? Read the News
            </Link>
            <Link to="/mentors" className="action-button">
              Check out our Mentors
            </Link>
          </article>
        </section>
      </main>

      <div>
        <h1>Read Our Articles</h1>
        {articleList.map((articledata, key) => {
          return (
            <div key={key} articledata={articledata}>
              {articledata.title}
            </div>
          );
        })}
      </div>

      <div>
        <h1>Check Out Our AMAZING Mentors!</h1>
        {mentorList.map((mentordata, key) => {
          return (
            <div key={key} mentordata={mentordata}>
              <MentorCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
