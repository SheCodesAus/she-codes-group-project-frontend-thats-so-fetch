import React from "react";
import { ReactComponent as CoffeeIcon } from '../../images/coffee-cup.svg';
import { ReactComponent as MentoringIcon } from '../../images/teacher.svg';
import { ReactComponent as SpeakingIcon } from '../../images/public-speaker.svg';
import { ReactComponent as TutoringIcon } from '../../images/pencil-ruler.svg';

// Styles
import "./InterestIcons.css";

// WILL NEED TO TEST THIS ONCE THE API IS WORKING
function InterestIcons(mentordata) {

  return (
    <div className="InterestsDiv">
      {mentordata.coffee === true ? (
        <CoffeeIcon className="active" />
      ) : (
        <CoffeeIcon className="icon" />
      )}

      {mentordata.mentoring === true ? (
        <MentoringIcon className="active" />
      ) : (
        <MentoringIcon className="icon" />
      )}

      {mentordata.public_speaking === true ? (
        <SpeakingIcon className="active" />
      ) : (
        <SpeakingIcon className="icon" />
      )}

      {mentordata.tutoring === true ? (
        <TutoringIcon className="active" />
      ) : (
        <TutoringIcon className="icon" />
      )}
    </div>
  );
}

export default InterestIcons;
