import React from "react";
import {
  BodyContainer,
  Container,
} from "../../shared-components/atoms/container/Container.styled";
import { HeaderOne } from "../../shared-components/atoms/typography/Typography.styled";
import Priority from "../../shared-components/chips/Priority";
import Status from "../../shared-components/chips/Status";
import { tasks } from "./tasksData";
import Table from "./Tasks.styles";
import PageHeading from "../../shared-components/headings/PageHeading";

const Tasks = () => {
  return (
    <Container>
      <PageHeading text="Project Tasks" />
      <BodyContainer width="100%" margin="20px 0">
        <Table.StyledTable>
          <Table.THead>
            <Table.TR>
              {Object.keys(tasks[0]).map((task, index) => (
                <Table.TH key={index}>
                  {task.slice(0, 1).toLocaleUpperCase() + task.slice(1)}
                </Table.TH>
              ))}
            </Table.TR>
          </Table.THead>
          <Table.TBody>
            {tasks.map((task, index) => (
              <Table.TR key={index}>
                <Table.TD>{task.name} </Table.TD>
                <Table.TD>{task.project} </Table.TD>
                <Table.TD>
                  <Priority value={task.priority} />
                </Table.TD>
                <Table.TD>{task.assigned} </Table.TD>
                <Table.TD>{task.dueDate} </Table.TD>
                <Table.TD>
                  <Status status={task.status} />
                </Table.TD>
              </Table.TR>
            ))}
          </Table.TBody>
        </Table.StyledTable>
      </BodyContainer>
    </Container>
  );
};

export default Tasks;
