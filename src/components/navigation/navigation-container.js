import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavigationComponent = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dynamicLink = (route, linkText) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="nav-link-wrapper"
      >
        <NavLink
          to={route}
          activeClassName="nav-link-active"
          exact
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          {linkText}
        </NavLink>
      </motion.div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <button className="hamburger-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <img src="/assets/images/bio/sitepersona.png" alt="Description" className="nav-image" />
      </div>

      <div className={`nav-link-container ${isMenuOpen ? "show" : ""}`}>
        {dynamicLink("/", "Home")}
        {dynamicLink("/about-me", "About Me")}
        {dynamicLink("/blog", "Blog")}
        {dynamicLink("/resume", "Resume")}
      </div>

      <div className="middle-side">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="name">Devin "ruru" Lu</div>
          <div className="title">UX Design/Game Design</div>
        </motion.div>
      </div>

      <div className="right-side">
        {props.loggedInStatus === "LOGGED_IN" && (
          <a onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </a>
        )}
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
