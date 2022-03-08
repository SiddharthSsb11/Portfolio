import React from "react";
import {
  HeadingWrapper,
  Heading,
  HeadingLarge,
  InfoPara
} from "./LandingElements";
import { Button } from "../Shared/Button/Button";
import Lottie from "react-lottie";
import animationData from "./lf30_NnBW3K.json";
import styled from "styled-components";

const defaultOptions = {
  loop: true,
  autoplay: true,
  name: "Loading Animation",
  render: "svg",
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingWrapper = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: absolute;
  bottom: 2rem;
  /* z-index: 5; */

  @media (max-width: 768px) {
    bottom: 0;
  }

  @media (max-width: 320px), (max-height: 630px) {
    display: none;
  }
`;

const Landing = () => {
  return (
    <React.Fragment>
      <HeadingWrapper>
        <Heading>
          <span>Hi, my name is</span>
          <HeadingLarge primary>Siddharth Singh Bhadoriya.</HeadingLarge>
          <HeadingLarge>Full-Stack Web Developer.</HeadingLarge>
        </Heading>
        <InfoPara>
          Focused on making creative web-apps with slick designs. <br /> Currently converting some Words into Code.
        </InfoPara>
        <Button value="My Resume" target="_blank" href="https://drive.google.com/file/d/178zxX5xGRsn4bFN5VpjEr3cpMDAHDhar/view?usp=sharing" size="1.3rem"></Button>
      </HeadingWrapper>
      <LoadingWrapper href="#about" rel="noreferrer">
        <Lottie options={defaultOptions} width={50} height={50} />
      </LoadingWrapper>
    </React.Fragment>
  );
};

export default Landing;
