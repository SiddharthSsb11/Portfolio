import {
  AboutSection,
  AboutWrapper,
  AboutHeading,
  AboutImageWrapper,
  AboutImage,
  AboutImageFilter,
  AboutName,
  AboutLeft,
  AboutRight,
  AboutDetailWrapper,
  AboutDetail,
} from "./AboutElements";
import AboutImageElement from "./Assets/AboutImage.png";
import Fade from "react-reveal/Fade";

const About = (props) => {
  return (
    <div id="about">
      <AboutSection>
        <AboutWrapper>
          <AboutLeft>
            <Fade cascade>
              <AboutHeading>About Me</AboutHeading>
            </Fade>
            <Fade cascade>
              <AboutImageWrapper>
                <AboutImage src={AboutImageElement} />
                <AboutImageFilter />
              </AboutImageWrapper>
              <AboutName value="Siddharth S. Bhadoriya" size="1.35rem" />
            </Fade>
          </AboutLeft>
          <AboutRight>
            <Fade cascade>
              <AboutHeading>About Me</AboutHeading>
            </Fade>
            <Fade cascade>
              <AboutDetailWrapper>
                <AboutDetail style={{textAlign: 'justify'}}>
                  I'm passionately into making things and even more determined in making things better.
                  <br /> <br />
                  I enjoy using my obsessive attention to detail in building interactive
                  experiences that run cross-platform and all devices. I have an unequivocal
                  love for making things that might change the world. Talk about Cliche...<br/>
                  I love to code, play Tabla, watch football and specifically into War,
                  Kingdoms & Empires, Civilisation...random mysterious & historical stuffs !!
                  
                </AboutDetail>
              </AboutDetailWrapper>
            </Fade>
          </AboutRight>
        </AboutWrapper>
      </AboutSection>
    </div>
  );
};

export default About;
