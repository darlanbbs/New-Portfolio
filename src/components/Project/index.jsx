import * as C from "./styled";
import { repositoriesObject } from "./repositories";
import ProjectComponents from "./ProjectComponents";

export function MyProject() {
  return (
    <C.ProjectsCards>
      {Object.entries(repositoriesObject).map(([key, value]) => (
        <ProjectComponents
          key={key}
          repository={value.repository}
          imageUrl={value.imageSrc}
          title={value.title}
          description={value.description}
          techs={value.techs}
        />
      ))}
    </C.ProjectsCards>
  );
}
