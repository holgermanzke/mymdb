import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";
import cancel from "../assets/cancel.svg";

const SearchSubmitButton = styled.button`
  background: #2c6570;
  width: 65px;
  height: 100%;
  flex-shrink: 0;
  outline: none;
  border: 0;
  cursor: pointer;
`;
const Icon = styled.img`
  color: #eeeeee;
  height: 30px;
  width: 30px;
`;

export default function SearchButton({ active, onClick }) {
  return (
    <SearchSubmitButton onClick={onClick}>
      <Icon src={active ? cancel : search} />
    </SearchSubmitButton>
  );
}
