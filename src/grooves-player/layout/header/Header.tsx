import { HeaderContainer, ProfileIcon } from "./Header.styles";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <ProfileIcon to={"/profile"} />
    </HeaderContainer>
  );
};

export default Header;
