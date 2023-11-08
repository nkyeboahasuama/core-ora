import styled from "styled-components";
import Table from "../ManageTasks/Tasks.styles";

class ProjectTable extends Table {
  static StyledTable = styled(Table.StyledTable)`
    border: 2px solid forestgreen;
  `;
  static THead = styled(Table.THead)`
    background: #330;
  `;
  static TR = styled(Table.TR)`
    &:nth-child(even) {
      background-color: #616161;
    }
    &:nth-child(odd) {
      background-color: #333;
    }
  `;
}

export default ProjectTable;
