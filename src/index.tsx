import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./components/App/App";
import { ModalRoot } from "./components/ModalRoot/ModalRoot";
import { FirebaseListeners } from "./firebase/FirebaseListeners";
import { FirebaseContext } from "./firebase/FirebaseContext";
import { store } from "./redux/store/store";
import { Firebase } from "./firebase/Firebase";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <FirebaseListeners />
        <ModalRoot />
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
