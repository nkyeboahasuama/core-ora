import React from "react";
import { BodyContainer } from "../../shared-components/atoms/container/Container.styled";
import { ProjectContainer } from "./Projects.styles";

const Projects = () => {
  return (
    <ProjectContainer>
      <BodyContainer>
        <table>
          <thead style={{ fontWeight: 700 }}>
            <tr>
              <td>Name</td>
              <td>Head</td>
              <td>Contributors</td>
              <td>Start</td>
              <td>Deadline</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eureka</td>
              <td>@anthony</td>
              <td>Nana</td>
              <td>11/02/23</td>
              <td>10/11/23</td>
            </tr>
            <tr>
              <td>Eureka</td>
              <td>@anthony</td>
              <td>Nana</td>
              <td>11/02/23</td>
              <td>10/11/23</td>
            </tr>
            <tr>
              <td>Eureka</td>
              <td>@anthony</td>
              <td>Nana</td>
              <td>11/02/23</td>
              <td>10/11/23</td>
            </tr>
          </tbody>
        </table>
      </BodyContainer>
    </ProjectContainer>
  );
};

export default Projects;
