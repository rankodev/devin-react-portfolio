import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/ruru.png";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="content-page-wrapper">
      <div className="left-column">
      <motion.div
        className="ruru-pic"
        style={{
          background: `url(${contactPagePicture}) no-repeat`,
          backgroundPosition: "center",
          backgroundColor: "rgb(242, 239, 168)"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      />
      </div>


      <div className="right-column">
        <div className="contact-bullet-points">
          <motion.div
            className="bio"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }} 
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to my portfolio! I'm Devin "ruru" Lu!<br /><br />
              I am a 3rd year student at <b>Western Governor's University</b> studying <b>Software Engineering</b> and planning to go into <b>UI/UX</b> afterwards. Not only am I one of the main organizers of <b>the indie game website, Eevee Expo</b>, I'm also a hobbyist game developer looking for opportunities to improve and learn. The elements on this website will go into depth on the projects I've worked on so far, as well as my experience with game development. 
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              As a web developer and a competitive gamer, my interests very quickly gravitated towards game design, as I found my heart truly loves to create and provide memorable experiences for others. Since I've started this journey, I've picked up <b>programming, pixel art, game design, QA/balancing, documentation, and deadline management (a LOT of game jams)</b>. I would love to give back to the gaming world the memorable adventures it has given me.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I think setting up the paths and pieces to reach big moments for an individual player is what enchants me the most about my favorite video games. I love games that guide the player through fun pacing, well-intentioned dialogue, and/or connected gameplay elements leading to true moments of mastery, marvel, or mystique.
              <br /><br />
              Some of my favorites are:
            </motion.p>

            {["Ghost Trick", "Stardew Valley", "Final Fantasy Tactics", "Deemo", "Limbus Company", "Teamfight Tactics", "Shin Megami Tensei IV"].map((game, index) => (
              <motion.div
                key={game}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.3 }}
              >
                - <i>{game}</i>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bullet-point-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 1.8 }} 
          >
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">ruruludev@gmail.com</div>
          </motion.div>

          <motion.div
            className="bullet-point-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 2.0 }} 
          >
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Atlanta, GA</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

