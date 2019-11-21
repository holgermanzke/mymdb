import React from "react";
import styled from "@emotion/styled";
import Logo from "./logo";
import SearchBar from "./SearchField";
import SearchButton from "./SearchButton";

const AppBar = styled.header`
  background: #2c6570;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <AppBar>
      {!showSearch && <Logo text="My Movie Database" />}
      {showSearch && <SearchBar />}
      <SearchButton
        active={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}
