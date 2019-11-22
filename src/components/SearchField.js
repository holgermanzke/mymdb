import React from "react";
import styled from "@emotion/styled";

const SearchInputField = styled.input`
  background: #eeeeee;
  height: 80%;
  flex-grow: 1;
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
  margin-left: 10px;
  outline: none;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
`;
export default function SearchInput() {
  return <SearchInputField autoFocus placeholder="Search..." />;
}
