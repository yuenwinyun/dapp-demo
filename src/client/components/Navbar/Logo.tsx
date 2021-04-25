import React from "react";
import { styled } from "@twstyled/core";

const Container = styled.a`
    @tailwind text-green-500 text-xl;
`;

export const Logo = defineSafeFC("Logo", () => {
    return <Container href="/">Dapp Game Demo</Container>;
});
