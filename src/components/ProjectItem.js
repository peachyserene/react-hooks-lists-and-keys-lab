import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techItem = technologies.map((language) => {
    return <span key={language}>{language}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techItem}</div>
    </div>
  );
}

export default ProjectItem;
