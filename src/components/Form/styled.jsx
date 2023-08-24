import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 4px;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding-top: 5px;
    padding-left: 10px;
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 4px;
    resize:none
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  width: 100%;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }

  @media (min-width: 768px) {
    padding: 0 2.6rem;
  }
`;
