import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App, Home } from "./comps";
import { store } from "./store";

import './socket'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export { Home };
