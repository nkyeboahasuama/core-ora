import styled from "styled-components";
import { BodyContainer } from "../../shared-components/atoms/container/Container.styled";

export const ProjectContainer = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
  background-color: green;
  height: calc(100vh - 80px);
  width: calc(100vw - 300px);
  overflow-y: auto;

  @media (max-width: 700px) {
    width: 100vw;
  }
`;
