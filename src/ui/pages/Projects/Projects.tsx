import {
  BodyContainer,
  Container,
} from "../../shared-components/atoms/container/Container.styled";
import ProjectTable from "./Projects.styles";
import tableData from "../../utils/randomProjects";
import PageHeading from "../../shared-components/headings/PageHeading";
import Table from "../ManageTasks/Tasks.styles";

const Projects = () => {
  return (
    <Container>
      <PageHeading text="Projects" />
      <BodyContainer width="100%" margin="20px 0">
        <ProjectTable.StyledTable>
          <ProjectTable.THead>
            <Table.TR>
              {Object.keys(tableData[0]).map((data) => (
                <Table.TH>
                  {data.slice(0, 1).toLocaleUpperCase() + data.slice(1)}
                </Table.TH>
              ))}
            </Table.TR>
          </ProjectTable.THead>
          <Table.TBody>
            {tableData.map((data, index) => (
              <Table.TR
                key={data.Name}
                style={{
                  background: index % 2 === 0 ? "#616161" : "#333",
                }}
              >
                <Table.TD>{data.Name} </Table.TD>
                <Table.TD>{data.Head} </Table.TD>
                <Table.TD>{data.Contributors} </Table.TD>
                <Table.TD>{data.Start} </Table.TD>
                <Table.TD>{data.Deadline} </Table.TD>
              </Table.TR>
            ))}
          </Table.TBody>
        </ProjectTable.StyledTable>
      </BodyContainer>
    </Container>
  );
};

export default Projects;
