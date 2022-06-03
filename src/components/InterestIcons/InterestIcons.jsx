import React from "react";
import { ReactComponent as CoffeeIcon } from '../../images/coffee-cup.svg';
import { ReactComponent as MentoringIcon } from '../../images/teacher.svg';
import { ReactComponent as SpeakingIcon } from '../../images/public-speaker.svg';
import { ReactComponent as TutoringIcon } from '../../images/pencil-ruler.svg';

// Styles
import "./InterestIcons.css";

// WILL NEED TO TEST THIS ONCE THE API IS WORKING
function InterestIcons(mentorData) {

  return (
    <div className="InterestsDiv">
      {mentorData.coffee === true ? (
        <CoffeeIcon className="active" />
      ) : (
        <CoffeeIcon className="icon" />
      )}

      {mentorData.mentoring === true ? (
        <MentoringIcon className="active" />
      ) : (
        <MentoringIcon className="icon" />
      )}

      {mentorData.public_speaking === true ? (
        <SpeakingIcon className="active" />
      ) : (
        <SpeakingIcon className="icon" />
      )}

      {mentorData.tutoring === true ? (
        <TutoringIcon className="active" />
      ) : (
        <TutoringIcon className="icon" />
      )}
    </div>
  );
}

export default InterestIcons;
