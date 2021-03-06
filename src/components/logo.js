import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  color: #eeeeee;
  letter-spacing: 2px;
  font-size: 1.6rem;
  padding: 0 20px;
`;

export default function Logo({ text }) {
  return <Title>{text}</Title>;
}
