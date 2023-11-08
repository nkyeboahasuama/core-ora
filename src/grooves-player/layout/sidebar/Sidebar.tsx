import { HeaderOne } from "../../shared/atoms/Typography.styled";
import {
  HeaderWrapper,
  NavLinkContainer,
  NavLinksWraper,
  SidebarNavLink,
  SidebarStyled,
} from "./Sidebar.styles";
import { BiHome, BiListOl, BiSolidSearch } from "react-icons/bi";
import { GroovesLogoContainer } from "../../shared/grooveslogo/grooveslogo.styles";
import { songsGenerator } from "../../helpers/songGenerator";

const songs = songsGenerator(4);
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
          {songs.map((song, idx) => (
            <SidebarNavLink key={idx} to={`/playlist/${idx}`}>
              <BiListOl />
              {song.title}
            </SidebarNavLink>
          ))}
        </NavLinksWraper>
      </NavLinkContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
