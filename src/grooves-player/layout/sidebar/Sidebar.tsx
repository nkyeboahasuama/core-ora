import React from "react";
import { HeaderOne } from "../../../ui/shared-components/atoms/typography/Typography.styled";
import {
  HeaderWrapper,
  NavLinkContainer,
  NavLinksWraper,
  SidebarNavLink,
  SidebarStyled,
} from "./Sidebar.styles";
import { BiHome, BiListOl, BiSolidSearch } from "react-icons/bi";
import { IoAlbumsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <NavLinkContainer>
        <HeaderWrapper>
          <HeaderOne>LIBRARY</HeaderOne>
        </HeaderWrapper>

        <NavLinksWraper>
          <SidebarNavLink to={"/"}>
            <BiHome /> Home
          </SidebarNavLink>
          <SidebarNavLink to={"/about"}>
            <IoAlbumsOutline />
            About
          </SidebarNavLink>
          <SidebarNavLink to={"/search"}>
            <BiSolidSearch />
            Search
          </SidebarNavLink>
        </NavLinksWraper>
      </NavLinkContainer>

      <NavLinkContainer>
        <HeaderWrapper>
          <HeaderOne>PLAYLISTS</HeaderOne>
        </HeaderWrapper>
        <NavLinksWraper>
          <SidebarNavLink to={"/playlists"}>
            <BiListOl />
            Mood 0
          </SidebarNavLink>
        </NavLinksWraper>
      </NavLinkContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
