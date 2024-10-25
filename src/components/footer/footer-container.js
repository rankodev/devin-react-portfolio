import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";


const FooterComponent = props => {
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
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <div className="footer-link-wrapper">
            <NavLink exact to="/" activeClassName="footer-link-active">
              Home
            </NavLink>
          </div>
  
          <div className="footer-link-wrapper">
            <NavLink to="/about-me" activeClassName="footer-link-active">
              About Me
            </NavLink>
          </div>
  
          <div className="footer-link-wrapper">
            <NavLink to="/blog" activeClassName="footer-link-active">
              Blog
            </NavLink>
          </div>
        </div>

      </div>
    );
  };
  
  export default withRouter(FooterComponent);
