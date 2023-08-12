import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        height: 100vh;
        background-color: #262A33;
        font-family: 'Inter', sans-serif;
        color: #D5CED9;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #757575;
            border-radius: 30px;
        }

        ::-webkit-scrollbar-thumb {
            background: #757575;
            border-radius: 10px;
        }
    }

    a {
        text-decoration: none;
        color: #D5CED9;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    li {
        cursor: pointer;
    }
`;

export const Main = styled.main`
  width: 90%;
  margin: 80px auto 0 auto;
  animation: fadeIn 2.5s;

  h1 {
    margin-bottom: 31px;

    color: gold;
    font-weight: bold;
  }

  strong {
    color: gold;
    font-weight: bold;
  }
  p {
    text-align: initial;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export default GlobalStyles;
