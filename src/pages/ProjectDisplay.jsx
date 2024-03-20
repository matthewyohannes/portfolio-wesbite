import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/ProjectDisplay.css'

export const ProjectDisplay = () => {
  const { id } = useParams(); // grabs specific project id when clicked and deconstructs it
  const project = ProjectList[id]; // uses id to access specific project
  return (
    <div className="project">
      <h1>{project.name}</h1>
          <img src={project.image} />
          <p><b>Skills:</b> {project.skills}</p>
      <GitHubIcon />
    </div>
  );
}
