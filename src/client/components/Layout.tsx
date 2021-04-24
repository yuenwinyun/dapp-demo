import React from "react";
import { Navbar } from "./Navbar";
import { ErrorBoundary } from "./ErrorBoundary";
import { styled } from "@twstyled/core";

const Container = styled.div`
    @tailwind bg-gray-100 h-screen flex flex-col;
`;

const Content = styled.main`
    @tailwind flex flex-col items-center justify-center;
`;

export const Layout = defineSafeFC("Layout", ({ children }) => {
    return (
        <Container>
            <Navbar />
            <ErrorBoundary>
                <Content>{children}</Content>
            </ErrorBoundary>
        </Container>
    );
});
