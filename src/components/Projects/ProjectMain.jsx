import React, { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectMainWrapper, ProjectHeading } from "./ProjectElements";
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
      <ProjectHeading style={{marginBottom: "-120px", marginTop: "70px"}}>Projects</ProjectHeading>
      <ProjectMainWrapper id={props.id}>
        {Object.values(projectInfo).map((element) => {
          return (
            <Project
              name={element.name}
              /* img={element.image} */
              value={element.content}
              to={{ pathname: element.link }}
            />
          );
        })}
      </ProjectMainWrapper>
      <h4 style={{marginLeft:"60px", lineHeight:"1.9", color: 'white', marginBottom: '27px', fontFamily: "Sora-SemiBold", textAlign: 'center', marginTop: '-78px'}}>
        Check out my &nbsp; <a href="https://github.com/SiddharthSsb11" target="_blank" rel="noreferrer" 
        style={{ color: '#64FFDA', textDecoration:"none", fontSize:"20px", border: '4px solid #64FFDA', padding: '5px', borderRadius: "12px"}}>
        <strong>Github</strong></a> &nbsp;  profile for more such projects, <br/>that I have 
         deployed over this thing called internet.
      </h4>
    </React.Fragment>
  );
};

export default ProjectMain;
