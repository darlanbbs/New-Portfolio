import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HighlightSection = styled.section`
  background-color: #f5f5f5;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const HighlightContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

export const HighlightTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

export const HighlightContent = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

export const HighlightButton = styled.button`
  background-color: #5643cc;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #455eb5;
  }
`;
