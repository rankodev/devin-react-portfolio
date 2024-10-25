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
          Welcome to my website! I'm Devin "ruru" Lu!<br /><br />I am a 3rd year student at <b>Western Governor's University</b> studying <b>Software Engineering</b> and planning to go into <b>UI/UX</b> afterwards. I'm also a hobbyist game developer looking for opportunities to improve and learn, and I've learned a ton fo skills so far. I've picked up programming, pixel art, game design, QA and balancing, and much more, but I'd say I'm becoming more and more interested in User Experiences. The elements on this website will go into depth on the projects I've worked on so far or experiences with game development.           <p>As a web developer and a competitive gamer, my interests very quickly gravitated towards game design, as I found my heart truly loves to create and provide memorable experiences for others. I would love to give back to the gaming world the memorable adventures it has given me. 
            <br /><br />I think setting up the paths and pieces to reach big moments for an individual player is what enchants me the most about my favorite video games. I love games that guide the player through fun pacing, well-intentioned dialogue, and/or connected gameplay elements leading to true moments of mastery, marvel, or mystique. <br /><br />Some of my favorite games are:<br />
            </p>
            - <i>Ghost Trick</i><br />
            - <i>Stardew Valley</i><br />
            - <i>Final Fantasy Tactics</i><br />
            - <i>Deemo</i><br />
            - <i>Limbus Company</i><br />
            - <i>Teamfight Tactics</i><br />
            - <i>Shin Megami Tensei IV</i><br />


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