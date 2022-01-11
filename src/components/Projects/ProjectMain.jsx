import React, { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectMainWrapper } from "./ProjectElements";
import ProjectData from "./ProjectData.json";

const ProjectMain = (props) => {
  let [projectInfo, setProjectInfo] = useState([]);
  const getProjectInfo = async () => {
    setProjectInfo(await ProjectData.data);
    console.log();
  };

  useEffect(() => {
    getProjectInfo();
  }, []);

  return (
    <React.Fragment>
      {/* <ProjectHeading>Projects</ProjectHeading> */}
      <ProjectMainWrapper id={props.id}>
        {Object.values(projectInfo).map((element) => {
          return (
            <Project
              name={element.name}
              img={element.image}
              value={element.content}
              to={{ pathname: element.link }}
            />
          );
        })}
      </ProjectMainWrapper>
      <h2 style={{color: 'white', marginBottom: '27px', fontFamily: "Sora-SemiBold", textAlign: 'center', marginTop: '-60px'}}>
        Check out my <a href="https://github.com/SiddharthSsb11" target="_blank" rel="noreferrer" style={{ color: '#64FFDA', textDecoration:"none" }}>
        <strong>Github</strong></a>  profile for more such projects, that I have<br/> 
         deployed over this thing called internet.
      </h2>
    </React.Fragment>
  );
};

export default ProjectMain;
