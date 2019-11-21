import React from "react";
import styled from "@emotion/styled";
import Logo from "./logo";

const AppBar = styled.header`
  background: #2c6570;
  height: 50px;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo text="My Movie Database" />
      Logo, Search, IconButton
    </AppBar>
  );
}
