import React from "react";
import { defineSafeFC } from "utils/defineSafeFC";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    border: 1px solid;
    ${tw`border-purple-500`}
`;

export const Layout = defineSafeFC("Layout", ({ children }) => {
    return <Container>{children}</Container>;
});
