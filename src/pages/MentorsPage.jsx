import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import MentorCard from "../components/MentorCard/MentorCard";

// Icon Components
import CoffeeIcon from "../components/InterestIcons/CoffeeIcon";
import MentorIcon from "../components/InterestIcons/MentorIcon";
import TutorIcon from "../components/InterestIcons/TutorIcon";
import SpeakerIcon from "../components/InterestIcons/SpeakerIcon";


function MentorsPage() {

    // State
    const [mentorList, setMentorList] = useState();


    // Actions and Helpers
    // THIS WILL NOT WORK UNTIL WE HAVE SET UP OUR API AND HAVE MENTORS IN THE DATABASE
    // MAY NEED TO ALTER THIS.. AS I DON'T BELIEVE WE HAVE AN ENDPOINT LIKE THIS.. LOOK INTO THIS FURTHER
    // I'm thinking that we will need to either create a table of "mentors" with ForgeinKey orrr filter all the users to only show the "mentors"
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}user`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                console.log(data)
                setMentorList(data);
            });
    }, []);


    return (
        <div>

            <h1>This is the Mentors Page!</h1>

            <div id="mentor-list">
                {mentorList.map((mentorData) => {
                    console.log(mentorData);
                    return (
                        <MentorCard
                            key={`mentor-${mentorData.id}`}
                            mentorData={mentorData} 
                        />
                    );
                })}
            </div>
            
        </div>
    )
}

export default MentorsPage;