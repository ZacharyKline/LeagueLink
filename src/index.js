import "./index.css";
import "antd/dist/antd.css";
import { App } from "./components"
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore, { history } from "./configureStore";
import React from "react";
import ReactDOM from "react-dom";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
