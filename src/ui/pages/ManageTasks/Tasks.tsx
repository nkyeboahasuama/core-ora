import React from "react";
import {
  BodyContainer,
  Container,
} from "../../shared-components/atoms/container/Container.styled";
import { HeaderOne } from "../../shared-components/atoms/typography/Typography.styled";
import Priority from "../../shared-components/chips/Priority";
import Status from "../../shared-components/chips/Status";

const trStyle = {
  "border-bottom": "1px solid #ddd",
  padding: "10px",
  "text-align": "center",
};

const cellPadding = "20px 0";

const cellStyle = {
  padding: cellPadding,
  color: "white",
  // "text-align": "center",

  // "border-right": "1px solid white",
};

const tasks = [
  {
    name: "Fix button color",
    project: "Eureka",
    priority: "High",
    assigned: "Eugene",
    dueDate: "11/02/23",
    status: "In progress",
  },
  {
    name: "Fix button color",
    project: "Eureka",
    priority: "Medium",
    assigned: "Eugene",
    dueDate: "11/02/23",
    status: "Done",
  },
  {
    name: "Fix button color",
    project: "Eureka",
    priority: "Regular",
    assigned: "Eugene",
    dueDate: "11/02/23",
    status: "In progress",
  },
];

const Tasks = () => {
  return (
    <Container>
      <HeaderOne
        style={{
          width: "100%",
          display: "flex",
          alignItems: "end",
          padding: "10px 0",

          borderBottom: "2px solid black",
        }}
      >
        Project Tasks
      </HeaderOne>
      <BodyContainer width="100%" margin="20px 0">
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead
            style={{
              backgroundColor: "red",
              color: "#ddd",
              fontSize: "0.9rem",
              textAlign: "left",
            }}
          >
            <tr style={trStyle}>
              <th>Tasks</th>
              <th>Project</th>
              <th>Priority</th>
              <th>Assigned to</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr style={trStyle} key={index}>
                <td style={cellStyle}>{task.name} </td>
                <td style={cellStyle}>{task.project} </td>
                <td>
                  <Priority value={task.priority} />
                </td>
                <td style={cellStyle}>{task.assigned} </td>
                <td style={cellStyle}>{task.dueDate} </td>
                <td style={cellStyle}>
                  <Status status={task.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </BodyContainer>
    </Container>
  );
};

export default Tasks;
