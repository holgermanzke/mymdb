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
  justify-content: space-around;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo text="My Movie Database" />
      <SearchBar />
      <SearchButton />
    </AppBar>
  );
}
