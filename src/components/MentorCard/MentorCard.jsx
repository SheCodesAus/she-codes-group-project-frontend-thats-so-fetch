import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./MentorCard.css";

// Components
import InterestIcons from "../InterestIcons/InterestIcons";

// adding ? to the mentorData props to solve TypeError
function MentorCard(props) {
  const { mentorData } = props;

  return (
    <div className="mentor-card">
      <Link to={`/profile/${mentorData?.id}`}>
        <img
          className="mentorImg"
          src={mentorData?.profile_photo}
          alt={`${mentorData?.first_name} ${mentorData.last_name}`}
        />
        <h3>
          {mentorData?.first_name} {mentorData?.last_name}
        </h3>
        <h3 className="mentor-name">{mentorData?.username}</h3>
        <InterestIcons mentorData={mentorData} />
      </Link>
    </div>
  );
}

export default MentorCard;
