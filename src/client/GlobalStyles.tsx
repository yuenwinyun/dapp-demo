import React from "react";
import { createGlobalStyle } from "styled-components";
import { defineSafeFC } from "utils/defineSafeFC";

const CustomStyles = createGlobalStyle``;

export default defineSafeFC("GlobalStyles", () => {
    return (
        <React.Fragment>
            <CustomStyles />
        </React.Fragment>
    );
});
