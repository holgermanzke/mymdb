import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0px;
          background: #2b2758;
          font-family: "News Cycle", sans-serif;
          color: white;
        }
        p {
          font-family: "News Cycle", sans-serif;
          color: white;
        }
        h1,
        h2 {
          font-family: "Ubuntu", sans-serif;
          text-align: center;
          color: #ae47ad;
        }
      `}
    />
  );
}
