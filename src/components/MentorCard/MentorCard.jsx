import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./MentorCard.css"

// Components
// import CoffeeIcon from "../InterestIcons/CoffeeIcon";
import SpeakerIcon from "../InterestIcons/SpeakerIcon";
import MentorIcon from "../InterestIcons/MentorIcon";
import TutorIcon from "../InterestIcons/TutorIcon";


function MentorCard({ mentorData }) {

    // State
    const [iconStatus, setIconStatus] = useState()


    return (
        <div className="mentor-card">
            <Link to={`/mentors/${mentorData.id}`}>
                <img src={mentorData.profile_photo} alt={`"${mentorData.first_name} ${mentorData.last_name}"`} />
                <h3>{mentorData.first_name} {mentorData.last_name}S</h3>
                {/* <CoffeeIcon /> */}
                <MentorIcon />
                <SpeakerIcon />
                <TutorIcon />
            </Link>
        </div>
    );
}

export default MentorCard;