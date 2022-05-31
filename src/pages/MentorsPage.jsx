import React, { useState, useEffect } from "react";

// Style
import "./MentorsPage.css";

// Components
import MentorCard from "../components/MentorCard/MentorCard";

function MentorsPage() {


    // State
    const [mentorList, setMentorList] = useState();


    // Actions and Helpers
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

            <div 
            id="mentor-list">
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