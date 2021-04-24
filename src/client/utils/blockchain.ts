import React from "react";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import type { ExternalProvider } from "@ethersproject/providers";

export function getLibrary(provider: ExternalProvider) {
    const lib = new Web3Provider(provider);
    lib.pollingInterval = 12000;
    return lib;
}

export function getInjectedConnector() {
    let injected: InjectedConnector | null = null;
    if (!injected) {
        injected = new InjectedConnector({});
    }
    return injected;
}

export function useConnectBlockchain() {
    const web3 = useWeb3React<Web3Provider>();

    React.useEffect(() => {
        if (!web3.active) {
            web3.activate(getInjectedConnector());
        }
        return () => {
            if (web3.active) {
                web3.deactivate();
            }
        };
    }, [web3.active]);
}

export function useTokenFarmContract() {
    const web3 = useWeb3React<Web3Provider>();

    console.log(web3);
}
