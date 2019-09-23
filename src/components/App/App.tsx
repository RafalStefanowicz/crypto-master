import React from "react";

import Nav from "../Nav/Nav";
import { PageContainer } from "../Page/PageContainer";

export const App = () => {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <PageContainer />
      </main>
    </>
  );
};
