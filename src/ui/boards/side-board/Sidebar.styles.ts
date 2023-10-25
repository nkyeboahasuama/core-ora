import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  HeaderOne,
  HeaderThree,
} from "../../shared-components/atoms/typography/Typography.styled";

interface SidebarHeaderProps {
  subHeader?: boolean;
}
export const SidebarStyled = styled.div`
  display: flex;
  align-items: start;
  /* padding: 0px 20px; */
  height: 100vh;
  width: 300px;
  background-color: #1f4f4f;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SidebarLinkContainer = styled.div`
  display: flex;
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
  width: 100%;

  &:active {
    color: red;
  }

  &:hover {
    width: 100%;
    border-radius: 10px;
    background-color: white;
    color: slategray;
  }
`;

export const SidebarHeader = styled(HeaderOne)<SidebarHeaderProps>`
  width: 100%;
  height: 80px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  ${({ subHeader }) =>
    subHeader &&
    css`
      font-size: 16px;
      font-weight: 600;
      height: fit-content;
    `};
`;
