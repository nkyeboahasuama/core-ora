import { useLocation } from "react-router-dom";
import { HeaderContainer, ProfileIcon } from "./Header.styles";

import Navigation from "../../shared/navigation/Navigation";
import Searchbar from "../../shared/searchbar/Searchbar";
import { ProfileImage } from "../../pages/profilepage/ProfilePage.styles";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

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

      <Link to={"/profile"}>
        <ProfileIcon>
          <BsPerson />
        </ProfileIcon>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
