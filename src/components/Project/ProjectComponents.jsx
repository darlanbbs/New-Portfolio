import React from "react";
import * as C from "./styled";

const ProjectComponents = ({
  repository,
  imageUrl,
  title,
  description,
  techs,
}) => {
  return (
    <a href={repository} target="_blank" rel="noopener noreferrer">
      <C.Project>
        <C.Image src={imageUrl} alt={`${title} image`} />
        <h3>{title}</h3>
        <p>{description}</p>
        <C.Tecnologias>{techs}</C.Tecnologias>
      </C.Project>
    </a>
  );
};

export default ProjectComponents;
