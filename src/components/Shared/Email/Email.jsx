import styled, { keyframes } from "styled-components";
import { backgroundDark, primary, secondary } from "../colorScheme";
import { bounceInDown } from 'react-animations';

const bounceAnimation = keyframes`${bounceInDown}`;

export const EmailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6.2rem;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition: 0.375s all ease-in-out;
  animation: 1.75s ${bounceAnimation};
  position: fixed;
  height: 100%;
  top: 0;
  right: -1%;
  /* z-index: 5; */
  
  &:hover,
  &:focus {
    margin-top: -15px;
  }
`;

export const EmailComponent = styled.a`
  cursor: pointer;
  font-size: 1.2rem;
  font-family: Sora-Regular;
  text-align: center;
  vertical-align: middle;
  line-height: 3rem;
  text-decoration: none;
  color: ${secondary};
  
  &::after {
    width: 18rem;
    height: 3rem;
    outline: 2px solid ${primary};
    transform: rotate(90deg);
    background: ${backgroundDark};
    content: "${(props) => props.value}";
    display: block;
    margin-top: -3rem;
    transition: 0.375s all ease-in-out;
  }
  &::before {
    content: "";
    width: 18rem;
    height: 3rem;
    outline: 2px solid ${secondary};
    transform: translate(7px, 7px) rotate(90deg);
    transition: 0.375s all ease-in-out;
    display: block;
  }

  &:hover::before,
  &:focus::before {
    transform: translate(0px, 0px) rotate(90deg);
    background: ${secondary + "13"};
  }

  &:hover::after,
  &:focus::after {
    transform: translate(0px, 0px) rotate(90deg);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const EmailLine = styled.div`
  border-right: 2px solid ${primary};
  height: 13vh;

  @media (max-width: 768px) {
    display: none;
  }
`;