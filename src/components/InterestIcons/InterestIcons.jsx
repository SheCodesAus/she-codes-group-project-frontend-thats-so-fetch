import React from 'react';
import { GiCoffeeCup, GiTeacher, GiPublicSpeaker, GiPencilRuler  } from 'react-icons/gi';

// Styles
import "./InterestIcons.css"

// WILL NEED TO TEST THIS ONCE THE API IS WORKING
function InterestIcons(mentorData) {

    return (
        <div className="InterestsDiv">
            {mentorData.coffee === true ?
                <GiCoffeeCup className="active" />
            :
                <GiCoffeeCup className="icon" />}

            {mentorData.mentoring === true ?
                <GiTeacher className="active" />
            :
                <GiTeacher className="icon" />}

            {mentorData.public_speaking === true ?
                <GiPublicSpeaker className="active" />
            :
                <GiPublicSpeaker className="icon" />}

            {mentorData.tutoring === true ?
                <GiPencilRuler className="active" />
            :
                <GiPencilRuler className="icon" />}

        </div>
    )
}

export default InterestIcons