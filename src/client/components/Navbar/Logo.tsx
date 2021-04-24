import React from "react";
import { styled } from "@twstyled/core";

const Container = styled.div`
    @tailwind text-green-500 text-xl;
`;

export const Logo = defineSafeFC("Logo", () => {
    return <Container>Dapp Game Demo</Container>;
});
