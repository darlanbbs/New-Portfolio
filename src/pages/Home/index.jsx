import { ExperienceHighlight } from "../../components/Highlight/Highlight";
import { Main } from "../../styles/globalStyles";
import * as C from "./styled";

export function Home() {
  return (
    <C.Container>
      <Main>
        <C.Title>
          Olá! Eu sou o <strong>Darlan Bomfim</strong>, um apaixonado pelo mundo
          do desenvolvimento de software e pela constante evolução tecnológica.
          Minha jornada nesse campo dinâmico é alimentada pela curiosidade
          inesgotável e pela busca contínua por desafios estimulantes. Através
          de projetos inspiradores e da dedicação em aprender novas tecnologias,
          estou comprometido em contribuir para soluções inovadoras que impactam
          positivamente a vida das pessoas.
        </C.Title>

        <a href="/Darlan_Bomfim.pdf" download>
          <C.StyledButton className="button-89" role="button">
            <span>Currículo</span>
            <span>Darlan Bomfim</span>
          </C.StyledButton>
        </a>
        <ExperienceHighlight />
      </Main>
    </C.Container>
  );
}
