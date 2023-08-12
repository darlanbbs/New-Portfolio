import { Link } from "react-router-dom";
import { Container } from "./styled";

export default function sidebarItem() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/conhecimentos">Tecnologias</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </Container>
  );
}
