import React from "react";
import { defineSafeFC } from "utils/defineSafeFC";
import { NavBar } from "./NavBar";
import styled from "styled-components";

const Container = styled.div``;

export const Layout = defineSafeFC("Layout", ({ children }) => {
    return (
        <Container>
            <NavBar />
            {children}
        </Container>
    );
});
