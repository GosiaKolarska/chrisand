import styled from "styled-components";

export const ButtonBase = styled.button`
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  margin: 12px 0;
  display: inline-block;
  color: ${({ color }) => (color === "light" ? "#fff" : "#0C0E15")};
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 12px;
  border-bottom: 2px solid
    ${({ color }) => (color === "light" ? "#fff" : "#0C0E15")};

  &:focus {
    outline: 3px solid #213ed7; // Example focus style
    outline-offset: 2px;
  }

  svg {
    display: inline-block;
    margin-left: 12px;
  }

  svg path {
    fill: ${({ color }) => (color === "light" ? "#fff" : "#0C0E15")};
  }

  &:hover {
    color: #213ed7;
    border-bottom: 2px solid #213ed7;

    svg {
      path {
        fill: #213ed7;
        transition: fill 0.2s ease-out;
      }
    }
  }

  @media (max-width: 590px) {
    font-size: 18px;
    margin: 0;
  }
`;
