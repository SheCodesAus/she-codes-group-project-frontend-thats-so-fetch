import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./MentorCard.css";

// Components
import InterestIcons from "../InterestIcons/InterestIcons";

// adding ? to the mentorData props to solve TypeError
function MentorCard(props) {
  const { mentordata } = props;
  // error asking for mentorData to be mentordata with lowercase d. Seems to have solved prop error for now...
  return (
    <div className="mentor-card">
      <Link to={`/profile/${mentordata?.id}`}>
        <img
          className="mentorImg"
          src={mentordata?.profile_photo}
          alt={`${mentordata?.first_name} ${mentordata?.last_name}`}
        />
        </Link>
        <h3>
          {mentordata?.first_name} {mentordata?.last_name}
        </h3>
        <h3 className="mentor-name">{mentordata?.username}</h3>
        <InterestIcons mentordata={mentordata} />
      
    </div>
  );
}

export default MentorCard;
