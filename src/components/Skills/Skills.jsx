import { useState, useEffect } from "react";
import {
  SkillsSectionWrapper,
  SkillsWrapper,
  SkillName,
  SkillsFilter,
  SkillsHeading,
} from "./SkillsElements";

import SkillsData from "./SkillsData.json";
import Fade from "react-reveal/Fade";

const Skills = (props) => {
  let [skillsInfo, setSkillsInfo] = useState([]);
  const getSkillsInfo = async () => {
    setSkillsInfo(await SkillsData.data);
  };

  useEffect(() => {
    getSkillsInfo();
  }, []);

  return (
    <>
      <SkillsSectionWrapper id={props.id}>
        <SkillsHeading>Skills</SkillsHeading>
        <h2 style={{color: 'white', marginBottom: '27px', fontFamily: "Sora-SemiBold"}}>Languages, Libraries, Frameworks & Tools</h2>
        <SkillsWrapper>
          {Object.values(skillsInfo).map((element) => {
            return (
              <Fade cascade>
                <SkillName>
                  <SkillsFilter
                    width={element.percentage}
                    widthLeft={element.left}
                  >
                    {element.name}
                  </SkillsFilter>
                </SkillName>
              </Fade>
            );
          })}
        </SkillsWrapper>
      </SkillsSectionWrapper>
    </>
  );
};

export default Skills;
