import styled from "styled-components";

export const SidebarStyled = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: red;
  height: calc(100vh - 80px);

  @media (max-width: 760px) {
    display: none;
  }
`;
