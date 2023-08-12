import styled from "styled-components";

export const Header = styled.header`
  width: 90%;
  margin: 41px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  background-image: linear-gradient(to right, #ee5d43, #f39c12);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
`;

export const SocialMedia = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    display: none;
  }

  svg {
    justify-content: flex-end;
  }

  @media (min-width: 800px) {
    > a {
      display: flex;
    }

    svg {
      display: none;
    }
  }
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Lista = styled.ul`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  border-bottom: 2px solid #262a33;
  padding: 4px;
  transition: linear 0.3s;

  &:hover {
    border-bottom: 2px solid #05a5d1;
  }
`;

export const PageSection = styled.section`
  width: 100%;
  margin-top: 20px;
  padding: 40px 0;
  background-color: #262a33;
`;

export const IconLink = styled.a`
  display: inline-block;
  margin-right: 15px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(2);
  }
`;

export const IconImage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
