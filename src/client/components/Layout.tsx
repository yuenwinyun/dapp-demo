import React from "react";
import { defineSafeFC } from "utils/defineSafeFC";
import { NavBar } from "./NavBar";
import { ErrorBoundary } from "./ErrorBoundary";
import styled from "styled-components";

const Container = styled.div``;

const Content = styled.main``;

const Footer = styled.footer``;

export const Layout = defineSafeFC("Layout", ({ children }) => {
    return (
        <Container>
            <NavBar />
            <ErrorBoundary>
                <Content>{children}</Content>
            </ErrorBoundary>
            <Footer />
        </Container>
    );
});
