import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  border: none;
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    transition: 0.5s;
  }

  &:hover img {
    opacity: 0.5;
    transform: translateX(30%);
  }
`;

export const CardDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: #ffc107;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);

  ${CardContainer}:hover & {
    transform: perspective(2000px) rotateY(0deg);
  }
`;

export const CardCenter = styled.div`
  padding: 10px;
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const CardTitle = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 20px;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: #262626;

  &.html {
    color: #ffc107; /* Amarelo para HTML */
  }

  &.css {
    color: #007bff; /* Azul para CSS */
  }

  &.javascript {
    color: #f7df1e; /* Amarelo para JavaScript */
  }

  &.typescript {
    color: #3178c6; /* Azul para TypeScript */
  }

  &.reactjs {
    color: #61dafb; /* Azul claro para ReactJS */
  }
  &.native {
    color: #61dafb; /* Azul claro para native */
  }

  &.nextjs {
    color: #000; /* Preto para Next.js */
  }

  &.bootstrap {
    color: #7952b3; /* Roxo para Bootstrap */
  }

  &.tailwind {
    color: #06b6d4; /* Azul claro para Tailwind CSS */
  }

  &.styled {
    color: #db7093; /* Rosa para Styled Components */
  }

  &.nodejs {
    color: #3c873a; /* Verde para Node.js */
  }

  &.mysql {
    color: #00758f; /* Azul escuro para MySQL */
  }

  &.postgresql {
    color: #336791; /* Azul escuro para PostgreSQL */
  }
  &.git {
    color: #f05033; /* Laranja escuro para Git */
  }
  &.mongodb {
    color: green; /* Laranja escuro para Mongodb */
  }
`;

export const CardSubtitle = styled.p`
  margin: 8px 0;
  padding: 0;
  font-size: 15px;
  color: #262626;
`;
