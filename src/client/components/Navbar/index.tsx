import React from "react";
import { styled } from "@twstyled/core";
import { Account } from "./Account";
import { Logo } from "@/components/Navbar/Logo";

const Container = styled.nav`
    @tailwind flex justify-between items-center px-5 py-3;
`;

export const Navbar = defineSafeFC("Navbar", () => {
    return (
        <Container>
            <Logo />
            <Account />
        </Container>
    );
});
