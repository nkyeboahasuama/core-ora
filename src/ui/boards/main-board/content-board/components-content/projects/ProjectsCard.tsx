import React from "react";
import { BodyContainer } from "../../../../../shared-components/atoms/container/Container.styled";
import {
  HeaderThree,
  HeaderTwo,
} from "../../../../../shared-components/atoms/typography/Typography.styled";
import { MediumCard } from "../../../../../shared-components/card/Card.styled";
import SingleProject from "./SingleProject";

const ProjectsCard = () => {
  const projectData = [
    { name: "Project 1", status: "Active", head: "Head 1" },
    { name: "Project 2", status: "Completed", head: "Head 2" },
    { name: "Project 3", status: "Pending", head: "Head 3" },
    { name: "Project 4", status: "Completed", head: "Head 4" },
    { name: "Project 5", status: "Pending", head: "Head 5" },
  ];
  return (
    <MediumCard>
      <BodyContainer
        height="100%"
        width="100%"
        dir="column"
        justifyContent="start"
        color="black"
      >
        <BodyContainer
          style={{
            borderBottom: "2px solid #c0c0c0",
            width: "90%",
            padding: "5px 0px",
          }}
        >
          <HeaderTwo>PROJECTS</HeaderTwo>
        </BodyContainer>
        <BodyContainer dir="column" width="100%" p="0px 0px">
          <table
            style={{
              width: "100%",
              fontSize: "20px",
            }}
          >
            <thead style={{ color: "#BDB76B" }}>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Head</th>
              </tr>
            </thead>

            {projectData.map((project) => (
              <SingleProject project={project} />
            ))}
            {/* </tbody>
          </table> */}
          </table>
        </BodyContainer>
      </BodyContainer>
    </MediumCard>
  );
};

export default ProjectsCard;
