import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
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
    <div className="nav-wrapper">
      <div className="left-side">
      <img src="/assets/images/bio/sitepersona2.png" alt="Description" className="nav-image" />
        <div className="nav-link-container">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/about-me" activeClassName="nav-link-active">
              About Me
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/resume" activeClassName="nav-link-active">
              Resume
            </NavLink>
          </div>
        </div>
      </div>

      <div className="middle-side">
        Devin "ruru" Lu
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