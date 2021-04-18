import Web3 from "web3";

// FIXME: type safety and env
declare const window: any;

export function loadWeb3() {
    const provider = window.ethereum || window.web3?.currentProvider;
    if (!provider) {
        throw new ReferenceError("no ethereum found");
    }
    window.web3 = new Web3(provider);
}

export function loadBlockchainData() {
    if (!window.web3) {
        throw new ReferenceError("no web3 client found");
    }

    return window.web3.eth.getAccounts();
}
