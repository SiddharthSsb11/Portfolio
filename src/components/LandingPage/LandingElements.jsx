import styled, { css, keyframes } from "styled-components";
import { primary, secondary } from "../Shared/colorScheme";
import { fadeIn } from "react-animations";

const HeadingLargeAnimation = keyframes`${fadeIn}`;

export const HeadingWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* padding-top: 2rem; */
  padding-left: 2rem;
  /* z-index: 5; */
`;
export const Heading = styled.div`
  color: ${primary};
  span {
    padding: 0.25rem;
    font-size: 1.1rem;
    font-family: "Sora-Bold";
      animation: 4s ${HeadingLargeAnimation};

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;
export const HeadingLarge = styled.div`
  color: ${secondary}7f;
  font-size: 3.25rem;
  font-family: Sora-Bold;
  animation: 4s ${HeadingLargeAnimation};

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${secondary};
      opacity: 1;
    `}
`;
export const InfoPara = styled.div`
  font-size: 1.1rem;
  color: ${secondary};
  font-family: Sora-Light;
  padding: 0.25rem;
  margin-bottom: 1.5rem;
    animation: 4s ${HeadingLargeAnimation};

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 85vw;
  }
`;
