import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
            </div>
            
          </div>
          <div className="bio">
<section class="resume-download-section">
  <h2>My Resume</h2>
  
  <div class="resume-preview">
    <img src="/assets/images/auth/resume.jpg" alt="Resume Preview" class="resume-thumbnail" />

    <a href="/assets/images/auth/resume.pdf" download class="resume-download-button">
      📄 Download Resume (PDF)
    </a>
  </div>
</section>
            <h1>Email me for inquiries below!</h1>
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