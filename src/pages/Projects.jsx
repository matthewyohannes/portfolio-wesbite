import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

export const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-page-title">My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => { // idx allows id of current project to be passed to each ProjectItem as prop
            return <ProjectItem id={idx} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};
