import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
            </div>
            
          </div>
          <div className="bio">
          Welcome to my website! My name is <b>Devin "ruru" Lu</b>! <br /><br />I am a 3rd year student at <b>Western Governor's University</b> studying <b>Software Engineering</b> and planning to go into <b>UI/UX</b> afterwards.

          <p>As a web developer and a gamer, my interests very quickly gravitated towards game design, as I found my heart truly loves to create and provide memorable experiences for others. I would love to give back to the gaming world the memorable adventures it has given me. 
            <br /><br />I think setting up the paths and pieces to reach big moments is what enchants me the most about my favorite video games. I love games that guide the player through fun pacing, well-intentioned dialogue, and connected gameplay elements leading to true grasps of mastery, marvel, or mystique. Some of my favorite games are:<br /><br />
            </p>

            - <i>Ghost Trick</i><br />
            - <i>Stardew Valley</i><br />
            - <i>Final Fantasy Tactics</i><br />
            - <i>Deemo</i><br />
            - <i>Shin Megami Tensei 4</i><br />
        </div>
        
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">ruruludev@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Atlanta, GA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
