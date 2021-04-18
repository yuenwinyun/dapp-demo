import React from "react";
import { defineSafeFC } from "utils/defineSafeFC";
import { Layout } from "components/Layout";
import { loadWeb3 } from "utils/blockchain";

export const App = defineSafeFC("App", () => {
    React.useEffect(() => {
        loadWeb3();
    }, []);

    return <Layout>TokenFarm App</Layout>;
});
