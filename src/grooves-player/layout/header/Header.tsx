import React from "react";
import { HeaderStyled, ProfileIcon } from "./Header.styles";
import { HeaderOne } from "../../../ui/shared-components/atoms/typography/Typography.styled";
import Searchbar from "../../shared/searchbar/Searchbar";
import { GroovesLogoContainer } from "../../shared/grooveslogo/grooveslogo.styles";

const Header = () => {
  return (
    <HeaderStyled>
      <GroovesLogoContainer>
        <HeaderOne>Grooves</HeaderOne>
      </GroovesLogoContainer>
      <Searchbar />
      <ProfileIcon to={"/profile"} />
    </HeaderStyled>
  );
};

export default Header;
