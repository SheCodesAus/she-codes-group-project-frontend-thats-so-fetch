//COMMENTING THIS OUT WHILE TESTING DUMMY DATA
// import React, { useState, useEffect } from "react";
import React from "react";

//Dummy Data
import { allProfiles } from "../fakeData";

// Style
import "./MentorsPage.css";

// Components
import MentorCard from "../components/MentorCard/MentorCard";

function MentorsPage() {

    // COMMENTING THIS OUT WHILE TESTING DUMMY DATA
    // // State
    // const [mentorList, setMentorList] = useState();


    // Actions and Helpers
    // THIS WILL NOT WORK UNTIL WE HAVE SET UP OUR API AND HAVE MENTORS IN THE DATABASE
    // MAY NEED TO ALTER THIS.. AS I DON'T BELIEVE WE HAVE AN ENDPOINT LIKE THIS.. LOOK INTO THIS FURTHER
    // I'm thinking that we will need to either create a table of "mentors" with ForgeinKey orrr filter all the users to only show the "mentors"
    
    // COMMENTING THIS OUT WHILE TESTING WITH DUMMY DATA
    
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}user`)
    //         .then((results) => {
    //             return results.json();
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setMentorList(data);
    //         });
    // }, []);


    return (
        <div>

            <h1>This is the Mentors Page!</h1>

            <div 
            id="mentor-list">
                {allProfiles.map((mentorData) => {
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