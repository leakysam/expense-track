import React from "react";
import ReactDOM from "react-dom";

import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="2598c1bb-2524-4e10-92b4-e0de28968331" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
