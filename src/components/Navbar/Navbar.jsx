import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "./Navbar.css";

// Images
import logo from "../../images/Navbar_logo_small.png";

function Navbar() {
  // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    window.localStorage.removeItem("token");
    navigateToLogin();
  };

  const checkUser = () => {
    const isUserLoggedIn = !!window.localStorage.getItem("token");
    // console.log("isUserLoggedIn", isUserLoggedIn)

    return isUserLoggedIn ? (
      <a href="logout" onClick={handleSignOut} className="button">
        Log out
      </a>
    ) : (
      <a href="login" onClick={navigateToLogin} className="button">
        Log in
      </a>
    );
  };

  return (
    <section className="navbar">
      <nav className="firstList">
        <Link to="/">
          <img src={logo} alt="fetch green logo" />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/mentors">Mentors</Link>
        <Link to="/news">News</Link>
      </nav>
      <nav className="secondList">
        <Link to="/profileform">Profile</Link>
        {/* Below we call the Action for the Login/Logout button */}
        {checkUser()}
        <Link to="/register/">Register </Link>
      </nav>
    </section>
  );
}

export default Navbar;
