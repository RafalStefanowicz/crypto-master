import React from "react";

import Nav from "../Nav/Nav";
import Page from "../Page/Page";

export const App = () => {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Page />
      </main>
    </>
  );
};
