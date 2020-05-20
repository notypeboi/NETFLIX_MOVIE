import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./store/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./sass/style.scss";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
