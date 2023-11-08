import { useLocation } from "react-router-dom";
import { HeaderContainer, ProfileIcon } from "./Header.styles";

import Navigation from "../../shared/navigation/Navigation";
import Searchbar from "../../shared/searchbar/Searchbar";

const Header = () => {
  const location = useLocation();
  const onSearchPage = location.pathname === "/search";

  return (
    <HeaderContainer
      style={{
        backgroundColor: `${onSearchPage && "#b91d1d"}`,
      }}
    >
      <Navigation />
      {onSearchPage && <Searchbar />}
      <ProfileIcon
        to={"/profile"}
        style={{
          backgroundColor: `${onSearchPage && "green"}`,
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
