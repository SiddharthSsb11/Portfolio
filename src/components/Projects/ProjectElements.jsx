import styled from "styled-components";
import { backgroundDark, primary, secondary } from "../Shared/colorScheme";
import { Link } from "react-router-dom";
export const ProjectMainWrapper = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50vw;
  position: absolute;
  margin-left: 15vw;
  height: 100vh; */
  display: grid;
  grid-template-columns: 18rem 18rem 18rem;
  grid-template-rows: 10rem;
  grid-gap: 3.5rem;
  row-gap: 6rem;
  justify-content: center;
  align-items: start;
  justify-items: center;
  padding: 5rem 0 5rem 3rem;
  /* z-index: 5; */

  @media (max-width: 768px) {
    /* display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100vw;
    flex-wrap: nowrap; */
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 30vh 30vh 30vh 30vh;
    grid-gap: 0;
    row-gap: 0;
    justify-content: end;
    /* justify-items: center; */
    align-items: center;
    padding-left: 0;
  }
`;

export const ProjectWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${secondary};
  cursor: pointer;
  position: absolute;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${secondary};
  }

  &::before, 
  &::after {
    content: "";
    width: 17rem;
    height: 10rem;
    position: absolute;
    z-index: 1;
    border: 2px solid ${ primary };
    transition: 0.375s all ease-in-out ;
  }

  &::before {
    transform: translate(7px, 7px);
    border: 2px solid ${ secondary };
    z-index: 0;
  }

  &::after {
    background: ${backgroundDark};
  }

  @media (max-width: 768px) {
    &::before, 
    &::after {
      width: 80vw;
      height: 25vh;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  background: transparent;

  @media (max-width: 768px) {
      width: 2rem;
      height: 2rem;
  }
`;
export const ProjectName = styled.div`
  font-size: 1.75rem;
  font-family: Sora-SemiBold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const ProjectDetail = styled.section`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  font-size: 1rem;
  font-family: Sora-Regular;
  text-align: center;
  transition: 0.375s all ease-in-out;
  width: 17rem;
  height: 10rem;
  z-index: 2;
  margin-bottom: -25px;
  gap: 15px;
  position: absolute;

  @media (max-width: 768px) {
    width: 80vw;
    height: 25vh;
  }
`;

export const ProjectDataDetail = styled.p`
  font-family: Sora-Light;
  padding: 0 10px;
`;

export const ProjectPreview = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
  z-index: 3;
  width: 17rem;
  height: 10rem;
  background: ${primary + "50"};
  transition: .375s all ease-in-out;
  
  &:hover,
  &:focus {
    margin-top: -25px;
    opacity: 0;
    background: transparent;
  }

  &:hover + ${ProjectDetail},
  &:focus + ${ProjectDetail} {
    opacity: 1;
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
      width: 80vw;
      height: 25vh;
  }
`;

export const ProjectHeading = styled.h1`
  color: ${secondary};
  text-align: center;
  font-size: 2rem;
  font-family: Sora-SemiBold;
  width: 100vw;
  padding: 2rem 0 2rem 2rem;

  @media (max-width: 768px) {
    text-align: start;
    padding: 1rem 0 1rem 2rem;
    margin-left: 2rem;
  }
`;