import React from "react";
import { Layout } from "@/components/Layout";
import { useConnectBlockchain } from "@/utils/blockchain";
import { Demo } from "@/components/Demo";

export const App = defineSafeFC("App", () => {
    useConnectBlockchain();

    return (
        <Layout>
            <Demo />
        </Layout>
    );
});
