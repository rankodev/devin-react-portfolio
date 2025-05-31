import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const FooterComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="footer-link-wrapper">
        <NavLink to={route} activeClassName="footer-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };

  return (
    <motion.div
      className="footer-wrapper" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="footer-links-container">
        <div className="footer-link-wrapper">
          <NavLink to={{pathname: "https://x.com/rankomon"}} target="_blank" activeClassName="footer-link-active">
            X
          </NavLink>
        </div>

        <div className="footer-link-wrapper">
          <NavLink exact to="https://bsky.app/profile/rankoruru.eeveeexpo.com" activeClassName="footer-link-active">
            BlueSky
          </NavLink>
        </div>

      </div>
    </motion.div>
  );
};

export default withRouter(FooterComponent);
