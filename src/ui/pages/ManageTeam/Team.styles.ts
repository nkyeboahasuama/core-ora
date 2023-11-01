import styled from "styled-components";
import Table from "../ManageTasks/Tasks.styles";

class TeamTable extends Table {
  static THead = styled(Table.THead)`
    text-align: left;
  `;
}

export default TeamTable;
