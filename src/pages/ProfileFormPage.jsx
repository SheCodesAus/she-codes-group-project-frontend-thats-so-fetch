import React from "react";
// Will need to create a rule so that a user can only click on either mentor or student not on both.
// Cannot see the writing in this font choice, and I don't know how to change it in the ROOTs (Monelle knows -__-)
// On that as well, even in light mode you can not read the writing of the mentor's profiles because font colour matches background
// Unsure on how to import the same styling from the ROOT made for the forms layout
// Components
import ProfileForm from "../components/ProfileForm/ProfileForm";

// Styles
import "./forms.css";

function ProfileFormPage() {
  return <ProfileForm />;
}

export default ProfileFormPage;
