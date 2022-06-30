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
              <AboutName value="Siddharth S. Bhadauriya" size="1.35rem" />
            </Fade>
          </AboutLeft>
          <AboutRight>
            <Fade cascade>
              <AboutHeading>About Me</AboutHeading>
            </Fade>
            <Fade cascade>
              <AboutDetailWrapper>
                <AboutDetail style={{textAlign: 'left'}}>
                  I'm passionately into making things and even more determined in making things better.
                  <br/>
                  I am a full-stack developer with an array of knowledge in front end and back end software development, 
                  languages and libraries, frameworks, databases and best code practices.<br/> 
                  I like to merge a passion for usability and user experience with technical knowledge to create mesmerizing digital experiences.<br/>
                  I find it rewarding to dig deep and uncover solutions to challenging problems,it's like solving a puzzle.<br/> 
                  It's something I've always enjoyed.<br/> 
                  When I am not coding, I identify myself as a die-hard Arsenal Footbal club fan and an ardent advocate of neo-noir genre movies and shows.<br/>
                  I love to code, play Tabla, watch & play football and I am specifically into War,
                  Kingdoms & Empires, Civilisation,to sum up, random mysterious & historical stuffs !!
                  
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
