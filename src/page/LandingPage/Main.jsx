import React from "react";
import Nav from "../../components/Shared/Nav/Nav";
import Landing from "../../components/LandingPage/Landing";
import { MainWrapper,/*  Wrapper */ } from "./MainElements";
import {
  EmailWrapper,
  EmailComponent,
  EmailLine,
} from "../../components/Shared/Email/Email";
import ProjectMain from "../../components/Projects/ProjectMain.jsx";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Footer from "../../components/Shared/Footer/Footer";

/* import Particles from "react-tsparticles";
import particleConfig from "./ParticleConfig.json"; */

const Main = () => {

/*   const particlesInit = (main) => {
    // console.log(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  }; */

  return (
    <React.Fragment>
      <div>
        <MainWrapper>
          <Nav></Nav>
          <Landing></Landing>
          <EmailWrapper>
            <EmailLine></EmailLine>
            <EmailComponent
              href="mailto:siddharthsb101@gmail.com"
              target="_blank"
              rel="noreffer"
              value="siddharthsb101@gmail.com"
            ></EmailComponent>
          </EmailWrapper>
        </MainWrapper>
        <About id="about" />
        <Skills id="skills" />
        <ProjectMain id="projects" />
        <Contact id="contact" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Main;
