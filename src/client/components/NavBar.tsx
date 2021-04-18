import React from "react";
import styled from "styled-components";
import { defineSafeFC } from "utils/defineSafeFC";

const Nav = styled.nav`
    height: 80px;
`;

export const NavBar = defineSafeFC("Navbar", () => {
    return (
        <Nav>
            <div>navBar</div>
        </Nav>
    );
});
