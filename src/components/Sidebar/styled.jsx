import styled from "styled-components";

export const Container = styled.div`
  background-color: #1e2128;
  border-radius: 7px;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 230px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.7s;
  z-index: 1000 !important;

  > svg {
    position: fixed;
    color: white;
    width: 25px;
    height: 25px;
    right: 0;
    margin-top: 45px;
    margin-right: 20px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 230px;
    }
  }
`;

export const Content = styled.div``;
