import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";
import { FaBars } from "react-icons/fa";
import github from "/images/github.svg";
import linkedin from "/images/linkedin.svg";
import whatsapp from "/images/whatsapp.svg";
import { Sidebar } from "../Sidebar";

export function MyHeader() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <C.Header>
      <C.Nav>
        <C.Lista>
          <C.ListItem>
            <Link to="/">Home</Link>
          </C.ListItem>
          <C.ListItem>
            <Link to="/conhecimentos">Tecnologias</Link>
          </C.ListItem>
          <C.ListItem>
            <Link to="/projects">Projetos</Link>
          </C.ListItem>
          <C.ListItem>
            <Link to="/contact">Contato</Link>
          </C.ListItem>
        </C.Lista>
      </C.Nav>
      <C.SocialMedia>
        <C.IconLink href="https://github.com/darlanbbs" target="_blank">
          <C.IconImage src={github} alt="GitHub Profile" />
        </C.IconLink>
        <C.IconLink
          href="https://www.linkedin.com/in/darlan-bomfim-903582260/"
          target="_blank"
        >
          <C.IconImage src={linkedin} alt="LinkedIn Profile" />
        </C.IconLink>
        <C.IconLink
          href="https://web.whatsapp.com/send?phone=5571986047621"
          target="_blank"
        >
          <C.IconImage src={whatsapp} alt="WhatsApp Profile" />
        </C.IconLink>
        <FaBars onClick={showSidebar} cursor="pointer" size={25} />
        {sidebar && <Sidebar active={setSidebar} />}
      </C.SocialMedia>
    </C.Header>
  );
}
