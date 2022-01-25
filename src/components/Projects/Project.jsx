import React from "react";
import {
  ProjectWrapper,
  ProjectPreview,
  /* ProjectImage, */
  ProjectName,
  ProjectDetail,
  ProjectDataDetail,
} from "./ProjectElements";
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40vw",
  height: "40vh",
};

const Project = (props) => {
  return (
    <React.Fragment>
      <Fade cascade>
        <div style={flex}>
          <ProjectWrapper target={"_blank"} to={props.to}>
            <ProjectPreview>
              {/* <ProjectImage src={props.img} alt=""></ProjectImage> */}
              <ProjectName>{props.name}</ProjectName>
            </ProjectPreview>
            <ProjectDetail>
              <ProjectDataDetail>{props.value}</ProjectDataDetail>
            </ProjectDetail>
          </ProjectWrapper>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default Project;
