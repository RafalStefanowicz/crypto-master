import React from "react";

import Nav from "../Nav/Nav";
import { Page } from "../Page/Page";
import { StyledMain } from "./appStyles";

export const App = () => {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <StyledMain>
        <Page />
      </StyledMain>
    </>
  );
};
