import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "@/utils/blockchain";
import "../index.twstyled.css";

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <App />
        </Web3ReactProvider>
    </React.StrictMode>,
    document.querySelector("#app"),
);
