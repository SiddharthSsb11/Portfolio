import styled, { css, keyframes } from "styled-components";
import { background, backgroundDark, primary, secondary } from "../colorScheme";
import { fadeInDown } from "react-animations"; 

const ButtonAnimation = keyframes`${fadeInDown}`;

export const Button = styled.a`
  background: ${background};
  color: ${secondary};
  animation: 5s ${ButtonAnimation};
  ${(props) =>
    props.primary &&
    css`
      background: ${backgroundDark};
      color: ${secondary};
    `}

  &::before,
  &::after {
    font-family: Sora-SemiBold;
    font-weight: 600;
    font-size: ${(props) => props.size};
    text-align: center;
    height: 30px;
    width: 200px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    position: absolute;
    border: 2px solid ${primary};
    transition: 0.375s all ease-in-out;
    z-index: 1;
    cursor: pointer;
  }

  &::before {
    content: "";
    border: 2px solid ${secondary};
    transform: translate(7px, 7px);
  }
  &::after {
    background: ${backgroundDark};
    content: "${(props) => props.value}";
  }

  &:hover::before,
  &:focus::before {
    transform: translate(0px, 0px);
    border: 2px solid ${secondary};
  }
`;
