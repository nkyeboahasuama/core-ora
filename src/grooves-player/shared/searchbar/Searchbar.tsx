import React from "react";
import { SearchInput, SearchbarContainer } from "./Searchbar.styles";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <FaSearch size="22px" color="black" />
      <SearchInput />
    </SearchbarContainer>
  );
};

export default Searchbar;
