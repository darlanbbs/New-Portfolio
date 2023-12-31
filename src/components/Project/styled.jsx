import styled from "styled-components";

export const ProjectsCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 45px;

  @media (min-width: 800px) {
    padding-bottom: 40px;
  }
`;

export const Project = styled.div`
  width: 373px;
  height: 550px;
  background-color: #363636;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: transform 1s;

  &:hover {
    transform: scale(1.2);
  }

  h3 {
    width: 90%;
    margin: 27px auto 17px auto;
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    color: #cccccc;
  }

  p {
    width: 90%;
    text-align: initial;
    margin: 0 auto;
    font-weight: 300;
    color: #cccccc;
  }

  p:nth-child(4) {
    margin-top: 12px;
  }
`;

export const Links = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 21px auto 0 auto;

  img {
    width: 20px;
    height: 20px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 15px;
    cursosr: pointer;
    img:nth-child(2) {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(108deg)
        brightness(104%) contrast(104%);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 40%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Tecnologias = styled.p`
  color: #fff !important;
  font-weight: 500;
`;
