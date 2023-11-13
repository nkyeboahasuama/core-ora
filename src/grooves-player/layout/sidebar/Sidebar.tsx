import { useEffect } from "react";
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
import { spotifyApiService } from "../../../services/spotifyApiServices";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const playlists = useAppSelector((state) => state.playlists);
  const currentUser = useAppSelector((state) => state.currentUser);

  console.log(currentUser);
  useEffect(() => {
    spotifyApiService.getUserPlaylists(dispatch);
  }, []);

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
          <SidebarNavLink to={"/home"}>
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
          {playlists &&
            playlists.map((playlist: any, idx) => (
              <SidebarNavLink key={idx} to={`/playlist/${idx}`}>
                <BiListOl />
                {playlist.name}
              </SidebarNavLink>
            ))}
        </NavLinksWraper>
      </NavLinkContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
