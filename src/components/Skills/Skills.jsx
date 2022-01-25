import React, { useState, useEffect } from "react";
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
    <React.Fragment>
      <SkillsSectionWrapper id={props.id}>
        <SkillsHeading>Skills</SkillsHeading>
        <h3 style={{color: 'white', marginBottom: '36px', marginLeft: "20px",fontFamily: "Sora-SemiBold"}}>Languages, Libraries, Frameworks & Tools</h3>
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
    </React.Fragment>
  );
};

export default Skills;
