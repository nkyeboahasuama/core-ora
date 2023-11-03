import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarStyled = styled.nav`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: #101010;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const HeaderWrapper = styled.div`
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;

export const SidebarNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: #ddd;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const NavLinksWraper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 20px;
`;
