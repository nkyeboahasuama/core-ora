import React from "react";
import {
  BodyContainer,
  Container,
} from "../../shared-components/atoms/container/Container.styled";
import PageHeading from "../../shared-components/headings/PageHeading";
import Table from "../ManageTasks/Tasks.styles";
import TeamTable from "./Team.styles";

const team = [
  {
    name: "Jonathan",
    email: "jon@gmail.com",
    status: "Active",
    role: "Backend Ing",
  },
  {
    name: "Jonathan",
    email: "jon@gmail.com",
    status: "Active",
    role: "Frontend Ing",
  },
  {
    name: "Jonathan",
    email: "jon@gmail.com",
    status: "Active",
    role: "Product manager",
  },
];

const Team = () => {
  return (
    <Container>
      <PageHeading text="Team" />
      <BodyContainer width="100%" margin="20px 0px">
        <TeamTable.StyledTable>
          <TeamTable.THead>
            <TeamTable.TR>
              {Object.keys(team[0]).map((member, index) => (
                <TeamTable.TH key={index}>
                  {member.toLocaleUpperCase()}
                </TeamTable.TH>
              ))}
            </TeamTable.TR>
          </TeamTable.THead>
          <TeamTable.TBody>
            {team.map((member, index) => (
              <TeamTable.TR key={index}>
                <TeamTable.TD>{member.name}</TeamTable.TD>
                <TeamTable.TD>{member.email}</TeamTable.TD>
                <TeamTable.TD>{member.status}</TeamTable.TD>
                <TeamTable.TD>{member.role}</TeamTable.TD>
              </TeamTable.TR>
            ))}
          </TeamTable.TBody>
        </TeamTable.StyledTable>
      </BodyContainer>
    </Container>
  );
};

export default Team;
