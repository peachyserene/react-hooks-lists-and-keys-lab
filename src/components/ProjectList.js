import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  let pizza = projects.map((proj) => {
    return (
      <ProjectItem
        key={proj.id}
        about={proj.about}
        name={proj.name}
        technologies={proj.technologies}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{pizza}</div>
    </div>
  );
}

export default ProjectList;
