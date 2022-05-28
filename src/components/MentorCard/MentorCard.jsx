import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./MentorCard.css"

// Components
import InterestIcons from "../InterestIcons/InterestIcons";


function MentorCard(props) {
const { mentorData } = props

    return (
        <div className="mentor-card">
            <Link to={`/profile/${mentorData.id}`}>
                <img src={`"${mentorData.profile_photo}"`} alt={`"${mentorData.first_name} ${mentorData.last_name}"`} />
                <h3>{mentorData.first_name} {mentorData.last_name}S</h3>
                <InterestIcons />
            </Link>
        </div>
    );
}

export default MentorCard;