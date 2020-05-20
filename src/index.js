import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducers, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
