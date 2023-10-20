import React from "react";
import { BodyContainer } from "../../shared-components/atoms/container/Container.styled";
import { ProjectContainer } from "./Projects.styles";
import tableData from "../../utils/randomProjects";

const cellPadding = "10px";

const cellStyle = {
  padding: cellPadding,
  color: "white",
};

const Projects = () => {
  return (
    <ProjectContainer>
      <BodyContainer width="100%" padding="20px 0">
        <table
          style={{
            border: "2px solid forestgreen",
            width: "80%",
            color: "white",
          }}
        >
          <thead style={{ fontWeight: 700, background: "#333" }}>
            <tr>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Head</th>
              <th style={cellStyle}>Contributors</th>
              <th style={cellStyle}>Start</th>
              <th style={cellStyle}>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={data.Name}
                style={{
                  background: index % 2 === 0 ? "#616161" : "#333",
                }}
              >
                <td style={cellStyle}>{data.Name} </td>
                <td style={cellStyle}>{data.Head} </td>
                <td style={cellStyle}>{data.Contributors} </td>
                <td style={cellStyle}>{data.Start} </td>
                <td style={cellStyle}>{data.Deadline} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </BodyContainer>
    </ProjectContainer>
  );
};

export default Projects;
