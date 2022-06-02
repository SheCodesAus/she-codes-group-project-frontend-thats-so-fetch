import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
//FORM
import ProfileForm from "../components/ProfileForm/ProfileForm";

// ICONS
import InterestIcons from "../components/InterestIcons/InterestIcons";

function ProfilePage() {
  // States
  //   adding [] to use state is displaying the info
  const [profileData, setProfileData] = useState([]);
  const { id } = useParams();

  // Actions
  useEffect(() => {
    fetch(`{process.env.REACT_APP_API_URL}user/${id}`)
      .then((results) => {
        return results.json();
        // For some reason this return results.json line (line 21) is returning the html from the index.html file
        // from the public folder. You can see if you change the ".json" to ".text". and check the console log in inspect
        // or the network preview of what is actually being returned.
        // I did a bit of digging into this one and the unexpected token error that is happening here
        // is due to the fact that the info being passed is in HTML format starting with < at position 0
        // and not in the json format that we are wanting. which should start with a {
        // Hope this provides some guidance for this error. I need to move on to something else -_-
      })
      .then((data) => {
        console.log(data);
        setProfileData(data);
      });
  }, [id]);
  // Add link to user's articles on profile?
  return (
    <div>
      <h1>Profile Page</h1>

      <div className="profileInformation">
        <div className="banner">
          <img
            src={profileData.banner_photo}
            alt={`${profileData.first_name} ${profileData.last_name}'s Banner.`}
          />
        </div>

        <img
          src={profileData.profile_photo}
          alt={`${profileData.first_name} ${profileData.last_name}`}
        />
        <h2>
          {profileData.first_name} {profileData.last_name}
        </h2>

        <InterestIcons />

        <h4>Location:</h4>
        <p>{profileData.location}</p>
        <h4>Social Link:</h4>
        <a href={profileData.social_link}>{profileData.social_link}</a>
        <h4>Bio:</h4>
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
