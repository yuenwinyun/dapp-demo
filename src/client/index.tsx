import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./tailwind.css";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.querySelector("#app"),
);
