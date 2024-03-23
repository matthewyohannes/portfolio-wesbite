import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://github.com/matthewyohannes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="GitHubIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthewyohannes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="LinkedInIcon" />
        </a>
      </div>
      <p> &copy; 2024 matthewyohannes.netlify.app</p>
    </div>
  );
}

export default Footer;
