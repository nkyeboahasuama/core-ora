import styled from "styled-components";
import { BodyContainer } from "../../shared-components/atoms/container/Container.styled";
import { Link } from "react-router-dom";

export const SidebarStyled = styled(BodyContainer)`
  height: 100vh;
  width: 300px;
  background-color: #1f4f4f;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SidebarLinkContainer = styled(BodyContainer)`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SidebarLink = styled(Link)`
  padding: 10px 0;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
  color: whitesmoke;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  width: 80%;

  &:active {
    color: red;
  }

  &:hover {
    width: 80%;
    border-radius: 10px;
    background-color: white;
    color: slategray;
  }
`;
