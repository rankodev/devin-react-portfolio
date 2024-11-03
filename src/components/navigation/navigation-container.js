import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}    
        exit={{ opacity: 0, y: -20 }}      
        transition={{ duration: 0.3 }}      
        className="nav-link-wrapper"       
      >
        <NavLink to={route} activeClassName="nav-link-active" exact>  
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

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <img src="/assets/images/bio/sitepersona.png" alt="Description" className="nav-image" />
        <div className="nav-link-container">
          {dynamicLink("/", "Home")}
          {dynamicLink("/about-me", "About Me")}
          {dynamicLink("/blog", "Blog")}
          {dynamicLink("/resume", "Resume")}
        </div>
      </div>

      <div className="middle-side">
        <motion.div
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}    
          exit={{ opacity: 0, y: -20 }}      
          transition={{ duration: 0.5 }}      
        >
          Devin "ruru" Lu
        </motion.div>
      </div>

      <div className="right-side">
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignOut}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
