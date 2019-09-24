import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./components/App/App";
import { ModalRoot } from "./components/Modals/ModalRoot/ModalRoot";
import { CryptoListener } from "./api/CryptoListener";
import { FirebaseListeners } from "./firebase/FirebaseListeners";
import { FirebaseContext } from "./firebase/FirebaseContext";
import { store } from "./redux/store/store";
import { FirebaseOperations } from "./firebase/FirebaseOperations";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <FirebaseContext.Provider value={new FirebaseOperations()}>
        <CryptoListener />
        <FirebaseListeners />
        <ModalRoot />
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
