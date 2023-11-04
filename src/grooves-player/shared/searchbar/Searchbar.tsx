import React, { useState, useEffect, useRef } from "react";
import { SearchInput, SearchbarContainer } from "./Searchbar.styles";
import { FaSearch } from "react-icons/fa";
import { CloseBtn } from "../atoms/CloseBtn";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClearInput = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <SearchbarContainer>
      <FaSearch size={`${searchQuery ? "15px" : "22px"}`} />
      <SearchInput
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        ref={inputRef}
      />
      {searchQuery && <CloseBtn onClick={handleClearInput} />}
    </SearchbarContainer>
  );
};

export default Searchbar;
