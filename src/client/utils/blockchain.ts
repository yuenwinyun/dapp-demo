import React from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { TokenFarm } from "../../contracts";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import type { ExternalProvider } from "@ethersproject/providers";

export function getLibrary(provider: ExternalProvider) {
    const lib = new Web3Provider(provider);
    lib.pollingInterval = 12000;
    return lib;
}

export function useInjectedConnector() {
    let injected: InjectedConnector | null = null;
    if (!injected) {
        injected = new InjectedConnector({});
    }
    return injected;
}

export function useConnectBlockchain() {
    const web3 = useWeb3React<Web3Provider>();
    const connector = useInjectedConnector();

    React.useEffect(() => {
        if (!web3.active) {
            web3.activate(connector).then(() => console.log("web3 activated"));
        }
        return () => {
            if (web3.active) {
                web3.deactivate();
            }
        };
    }, [web3.active, connector]);
}

export function useTokenFarmContract() {
    const { library } = useWeb3React<Web3Provider>();
    // FIXME
    let contract = new Contract("", TokenFarm);
    return contract;
}
