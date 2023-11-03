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
import { GroovesLogoContainer } from "../../shared/grooveslogo/grooveslogo.styles";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <GroovesLogoContainer>
        <HeaderOne>Grooves</HeaderOne>
      </GroovesLogoContainer>
      <NavLinkContainer>
        <HeaderWrapper>
          <HeaderOne>LIBRARY</HeaderOne>
        </HeaderWrapper>

        <NavLinksWraper>
          <SidebarNavLink to={"/"}>
            <BiHome /> Home
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
