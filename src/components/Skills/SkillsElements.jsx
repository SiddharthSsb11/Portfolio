import styled from "styled-components";
import { primary, secondary } from "../Shared/colorScheme";

export const SkillsSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const SkillsWrapper = styled.section`
  display: grid;
  grid-template-columns: 25rem 25rem;
  grid-template-rows: 3.5rem;
  row-gap: 1.5rem;
  column-gap: 7.5rem;
  padding-left: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 80vw;
    padding: 0;
  }
`;

export const SkillName = styled.div`
  width: 25rem;
  height: 3.5rem;
  background: transparent;
  border: 2px solid ${primary};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const SkillsFilter = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${primary + "50"} ${(props) => props.width},
    transparent ${(props) => props.widthLeft}
  );
  z-index: 5;
  color: ${secondary};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Sora-Light;

  &:hover,
  &:focus {
    background: linear-gradient(
    90deg,
    ${primary + "75"} ${(props) => props.width},
    transparent ${(props) => props.widthLeft}
  );
  }
`;

export const SkillsHeading = styled.h1`
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
