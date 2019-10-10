import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { App } from "./components/App/App";
import { ModalRoot } from "./components/Modals/ModalRoot/ModalRoot";
import { CryptoListener } from "./api/CryptoListener";
import { FirebaseListeners } from "./firebase/FirebaseListeners";
import { FirebaseContext } from "./firebase/FirebaseContext";
import { store } from "./redux/store/store";
import { FirebaseOperations } from "./firebase/FirebaseOperations";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <FirebaseContext.Provider value={new FirebaseOperations()}>
          <GlobalStyles />
          <CryptoListener />
          <FirebaseListeners />
          <ModalRoot />
          <App />
        </FirebaseContext.Provider>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
