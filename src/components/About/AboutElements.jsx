import styled, { css } from "styled-components";
import { secondary, backgroundDark, primary } from "../Shared/colorScheme";

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 1rem 0 2rem 3rem;
  /* z-index: 5; */
  /* margin-left: 15vw; */

  @media (max-width: 768px) {
    height: 100%;
    overflow-x: hidden;
    margin-left: 0;
    padding: 1rem 0 2rem 0;
    justify-content: center;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  min-width: 55rem;
  max-width: 60rem;
  grid-gap: 1rem;
  padding: 1rem;
  padding-bottom: 10vh;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    width: 100vw;
    grid-gap: 5vh;
  }
`;

export const AboutLines = styled.div`
`;

export const AboutImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${secondary};
  cursor: pointer;
  text-decoration: none;
  width: 18rem;
  height: 18rem;
  position: relative;


  &:hover,
  &:focus {
    color: ${secondary};
  }

  &::before, 
  &::after {
    content: "";
    width: 18rem;
    height: 18rem;
    position: absolute;
    z-index: 1;
    border: 2px solid ${ primary };
    transition: 0.375s all ease-in-out ;
  }

  &::before {
    transform: translate(10px, 10px);
    border: 2px solid ${ secondary };
    z-index: 0;
  }

  &::after {
    background: ${backgroundDark};
  }

  &:hover::before,
  &:focus::before {
    transform: translate(5px, 5px);
    border: 2px solid ${secondary};
  }

  @media (max-width: 768px) {
    width: 75vw;
    height: 75vw;

    &::before,
    &::after {
    width: 75vw;
    height: 75vw;      
    }
  }
`;

export const AboutImageFilter = styled.div`
  width: 18rem;
  height: 18rem;
  /* background: ${primary+"75"}; */
  transition: 0.375s all ease-in-out;
  z-index: 10;

  &:hover,
  &:focus {
    background: transparent;
  }

  @media (max-width: 768px) {
    width: 75vw;
    height: 75vw;
  }
`;

export const AboutImage = styled.img`
  width: 18rem;
  height: 18rem;
  position: absolute;
  z-index: 5;

  @media (max-width: 768px) {
    width: 75vw;
    height: 75vw;
  }
`;

export const AboutName = styled.div`
  color: ${secondary};
  ${(props) =>
    props.primary &&
    css`
      background: ${backgroundDark};
      color: ${secondary};
    `}

  &::before,
  &::after {
    font-family: Sora-SemiBold;
    font-size: ${(props) => props.size};
    text-align: center;
    height: 2.25rem;
    width: 17rem;
    line-height: 2.25rem;
    padding: 0.5rem;
    position: absolute;
    margin-top: 1.5rem;
    border: 2px solid ${primary};
    transition: 0.375s all ease-in-out;
    z-index: 1;
    cursor: pointer;
  }

  &::before {
    content: "";
    transform: translate(10px, 10px);
    border: 2px solid ${secondary};
  }
  &::after {
    background: ${backgroundDark};
    content: "${(props) => props.value}";
  }

  &:hover::before,
  &:focus::before {
    transform: translate(5px, 5px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AboutHeading = styled.h1`
  font-family: Sora-SemiBold;
  color: ${secondary};
  font-size: 2rem;
  grid-area: heading;
  text-align: left;
  
  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem 0.5rem;
  }
`;

export const AboutDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutDetail = styled.p`
  width: 100%;
  height: 100%;
  text-align: left;
  font-family: Sora-Light;
  font-size: 1.10rem;
  padding: 0 3rem;
  color: ${secondary};
  letter-spacing: 0.05mm;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 10vw;
  }
`;

export const AboutLeft = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  width: 100%;
  height: 100%;

  ${AboutHeading} {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 0 0 10vw;

    ${AboutHeading} {
    display: block;
    }
  }
`;

export const AboutRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    width:  100vw;
    height: 100%;
    gap: 1rem;

    ${AboutHeading} {
    display: none;
    }
  }
`;