import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css"

export const Home = () => {
  return (
    <div className="home">
      <div className="about">
      <h2>Hi, my name is Matthew</h2>
      <div className="prompt">
        <p>A software developer with a passion for learning and creating.</p>
        <a href="https://github.com/matthewyohannes" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="GitHubIcon"/>
        </a>
        <a href="https://www.linkedin.com/in/matthewyohannes" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="LinkedInIcon"/>
        </a>
        <a href="mailto:matthewyohannes77@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon className="EmailIcon"/>
        </a>
      </div>
    </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS, TailwindCSS, MaterialUI, DaisyUI, AWS Amplify
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, DynamoDB, AWS, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, Javascript, C++, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
