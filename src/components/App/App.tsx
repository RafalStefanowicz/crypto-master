import React from "react";

import Nav from "../Nav/Nav";
import { Page } from "../Page/Page";
import { StyledMain, StyledMainInner } from "./appStyles";

export const App = () => {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <StyledMain>
        <StyledMainInner>
          <Page />
        </StyledMainInner>
      </StyledMain>
    </>
  );
};
