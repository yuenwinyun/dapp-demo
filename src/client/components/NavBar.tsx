import React from "react";
import styled from "styled-components";
import { defineSafeFC } from "utils/defineSafeFC";

const Nav = styled.nav``;

export const NavBar = defineSafeFC("Navbar", () => {
    return (
        <Nav>
            <div>navBar</div>
        </Nav>
    );
});
