import styled from "styled-components";
import Table from "../ManageTasks/Tasks.styles";

class ProjectTable extends Table {
  static StyledTable = styled(Table.StyledTable)`
    border: 2px solid forestgreen;
  `;
  static THead = styled(Table.THead)`
    background: #330;
  `;
}

export default ProjectTable;
