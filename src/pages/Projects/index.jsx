import { MyProject } from "../../components/Project";
import { Main } from "../../styles/globalStyles";
import { Projects } from "./styled";

export function MyProjects() {
  return (
    <>
      <Main>
        <h1>Projetos</h1>
        <Projects>
          <MyProject />
        </Projects>
      </Main>
    </>
  );
}
