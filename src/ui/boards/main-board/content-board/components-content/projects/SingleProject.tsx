import React from "react";
import { BodyContainer } from "../../../../../shared-components/atoms/container/Container.styled";
import {
  HeaderThree,
  HeaderTwo,
} from "../../../../../shared-components/atoms/typography/Typography.styled";
import StatusChip from "../../../../../shared-components/status/StatusChip";

interface ISingleProjectProp {
  project: any;
}

const SingleProject: React.FC<ISingleProjectProp> = ({ project }) => {
  return (
    <>
      <BodyContainer
        justifyContent="space-around"
        style={{
          padding: "7px 0px",
          width: "100%",
          //   backgroundColor: "white",
        }}
      >
        <BodyContainer>
          <HeaderThree color="black">{project.name}</HeaderThree>
        </BodyContainer>{" "}
        <BodyContainer justifyContent="start">
          <StatusChip status={project.status} />
          <HeaderThree color="black">{project.status}</HeaderThree>
        </BodyContainer>
        <BodyContainer>
          <HeaderThree color="black">{project.head}</HeaderThree>
        </BodyContainer>
      </BodyContainer>
    </>
  );
};

export default SingleProject;
