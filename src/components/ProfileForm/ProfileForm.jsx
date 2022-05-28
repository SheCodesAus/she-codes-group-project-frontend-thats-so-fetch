import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileForm(profileData) {

    // State
    const [profile, setProfile] = useState({
        is_mentor: false,
        is_student: false,
        first_name: "",
        last_name: "",
        profile_photo: "",
        banner_photo: "",
        location: "",
        social_link: "",
        bio: "",
        coffee: false,
        mentoring: false,
        tutoring: false,
        public_speaking: false
    });

    // Hooks
    const navigate = useNavigate();


    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProfile((prevProfileData) => ({
            ...prevProfileData,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        try {
            const response = await fetch(`${process.env.RE_APP_API_URL}user/`,
                {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`
                },
                body: JSON.stringigy({
                    is_mentor: profile.is_mentor,
                    is_student: profile.is_student,
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    profile_photo: profile.profile_photo,
                    banner_photo: profile.banner_photo,
                    location: profile.location,
                    social_link: profile.social_link,
                    bio: profile.bio,
                    coffee: profile.coffee,
                    mentoring: profile.mentoring,
                    tutoring: profile.tutoring,
                    public_speaking: profile.public_speaking
                }),
            });
            const data = await response.json();
            console.log(data);
            navigate(`/user/${data.id}`);
        } catch (err) {
            console.log(err);
        }
    };

    const  formFields = [
        {
            id: "is_mentor",
            label: "Mentor:",
            type: "radio",
        },
        {
            id: "is_student",
            label: "Student:",
            type: "radio",
        },
        {
            id: "first_name",
            label: "First Name:",
            placeholder: "Enter First Name",
            type: "text",
        },
        {
            id: "last_name",
            label: "Last Name:",
            placeholder: "Enter Last Name",
            type: "text",
        },
        {
            id: "profile_photo",
            label: "Profile Photo:",
            placeholder: "Enter Image URL",
            type: "url",
        },
        {
            id: "banner_photo",
            label: "Banner Photo:",
            placeholder: "Enter Image URL",
            type: "url",
        },
        {
            id: "location",
            label: "Location:",
            placeholder: "Enter Your Location",
            type: "text",
        },
        {
            id: "social_link",
            label: "Social Link:",
            placeholder: "Enter A Social Link URL",
            type: "url",
        },
        {
            id: "bio",
            label: "Bio:",
            placeholder: "Enter Bio",
            type: "text",
        },
        {
            id: "coffee",
            label: "Interested in Coffee?:",
            type: "checkbox",
        },
        {
            id: "mentoring",
            label: "Interested in Mentoring?:",
            type: "checkbox",
        },
        {
            id: "tutoring",
            label: "Interested in Tutoring?:",
            type: "checkbox",
        },
        {
            id: "public_speaking",
            label: "Interested in Public Speaking?:",
            type: "checkbox",
        },
        ];

        return (
            <form className="ProfileForm">
                <h3>Update Your Profile</h3>
                {formFields.map((field, key) => {
                    return (
                    <div className="row" key={`${key}-${field.id}`}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                        />
                    </div>
                    );
                })}
                <button className="primary-button" type="submit" onClick={handleSubmit}>
                    Update
                </button>
            </form>
            );
        }
        
        export default ProfileForm;
