import React from "react";
import ReactDOM from "react-dom/client";
import RouteComponent from "./routes/route";
import { Provider } from "react-redux";
import "./index.css";
import store from "./states/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouteComponent />
    </React.StrictMode>
  </Provider>
);
