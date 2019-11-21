import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";

const SearchSubmitButton = styled.button`
  background: #2c6570;
  width: 65px;
  height: 100%;
  flex-shrink: 0;
  outline: none;
  border: 0;
`;
const Icon = styled.img`
  color: #eeeeee;
  height: 30px;
  width: 30px;
`;

export default function SearchButton() {
  return (
    <SearchSubmitButton>
      <Icon src={search} />
    </SearchSubmitButton>
  );
}
