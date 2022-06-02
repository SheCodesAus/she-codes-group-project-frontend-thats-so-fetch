import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
//FORM
import ProfileForm from "../components/ProfileForm/ProfileForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

// ICONS
import InterestIcons from "../components/InterestIcons/InterestIcons";

// STYLES
import "./ProfilePage.css";

function ProfilePage() {
  // States
  //   adding [] to use state is displaying the info
  const [profileData, setProfileData] = useState([]);

  //   to use frist_name from mentor data to display on mentors profile page as heading of the page
  //   const { mentordata } = useState([]);
  const { id } = useParams();

  // Actions
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}user/profile/${id}/`)
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setProfileData(data);
      });
  }, [id]);
  // Add link to user's articles on profile?
  return (
    <div>
      {/* I was trying to add the mentors first_name here with the const state from above to display at the top of each user's profile page */}
      <div className="mentor-name">
        <h1> Mentor's Name</h1>
        {/* <h1>{mentordata.first_name}</h1> */}
      </div>
      {/* i have commented things out below so if someone doesn't include the information its not empty saying "Social Link:" with no user input */}
      <div className="profileInformation">
        <div className="banner">
          <img
            src={profileData.banner_photo}
            alt={`${profileData.first_name} ${profileData.last_name}'s Banner.`}
          />
        </div>
        <div className="profile-photo">
          <img
            src={profileData.profile_photo}
            alt={`${profileData.first_name} ${profileData.last_name}`}
          />
        </div>
        <h2>
          {profileData.first_name} {profileData.last_name}
        </h2>
        <div className="interest-icons">
          <InterestIcons />
        </div>
        <h4>From {profileData.location}</h4>
        {/* <p>From</p> */}
        {/* <h4>Social Link:</h4> */}
        <a href={profileData.social_link}>{profileData.social_link}</a>
        <h4>More on this mentor...</h4>
        <p>{profileData.bio}</p>
      </div>

      {/* // THIS IS SUPPOSED TO SHOW YOU THE FORM TO EDIT YOUR PROFILE IF YOU ARE THE OWNER OF THE PROFILE */}
      {profileData.id === window.localStorage.getItem("id") ? (
        <div className="editProfile">
          <ProfileForm />
        </div>
      ) : null}
    </div>
  );
}

export default ProfilePage;
