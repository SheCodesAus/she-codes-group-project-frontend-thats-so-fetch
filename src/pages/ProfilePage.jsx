import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
//FORM
import ProfileForm from "../components/ProfileForm/ProfileForm";

// ICONS
import InterestIcons from "../components/InterestIcons/InterestIcons";

function ProfilePage() {


    // States
    const [profileData, setProfileData] = useState();
    const { id } = useParams();

    // Actions
    useEffect(() => {
        fetch(`{process.env.REACT_APP_API_URL}user/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProfileData(data);
        });
    }, [id]);


    return (

        <div>
            <h1>This is the Project Page!</h1>

            <div className="profileInformation">
                <div className="banner">
                <img src={profileData.banner_photo} alt={`${profileData.first_name} ${profileData.last_name}'s Banner.`} />
                </div>

                <img src={profileData.profile_photo} alt={`${profileData.first_name} ${profileData.last_name}`} />
                <h2>{profileData.first_name} {profileData.last_name}</h2>

                <InterestIcons />

                <h4>Location:</h4>
                <p>{profileData.location}</p>
                <h4>Social Link:</h4>
                <a href={profileData.social_link}>{profileData.social_link}</a>
                <h4>Bio:</h4>
                <p>{profileData.bio}</p>
            </div>

            {/* // THIS IS SUPPOSED TO SHOW YOU THE FORM TO EDIT YOUR PROFILE IF YOU ARE THE OWNER OF THE PROFILE */}
            { profileData.id === window.localStorage.getItem("id") ?
            <div className="editProfile">
                <ProfileForm /> 
            </div>
            : null }
            


        </div>
        
    )
}

export default ProfilePage;