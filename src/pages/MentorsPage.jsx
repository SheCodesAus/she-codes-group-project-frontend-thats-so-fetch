import React, { useState, useEffect } from "react";

// Style
import "./MentorsPage.css";

// Components
import MentorCard from "../components/MentorCard/MentorCard";

function MentorsPage() {
  // State
  const [mentorList, setMentorList] = useState([]);

  // Actions and Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}user/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setMentorList(data);
      });
  }, []);

  return (
    <div>
      <h1>Our Fetch Mentors</h1>

      <div id="mentor-list">
        {mentorList.map((mentordata, key) => {
          console.log(mentordata);
          return (
            <MentorCard
              key={`mentor-${mentordata.id}`}
              mentordata={mentordata}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MentorsPage;
