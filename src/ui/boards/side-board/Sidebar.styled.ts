import styled from "styled-components";
import { BodyContainer } from "../../shared-components/atoms/container/Container.styled";

export const SidebarStyled = styled(BodyContainer)`
  height: 100vh;
  width: 300px;
  background-color: whitesmoke;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SidebarLinkContainer = styled(BodyContainer)`
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 100%;
`;

export const SidebarLink = styled.a`
  color: slateblue;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:active {
    color: red;
  }

  &:hover {
    color: green;
  }
`;
