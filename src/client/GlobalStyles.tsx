import React from "react";
import { createGlobalStyle } from "styled-components";
import { defineSafeFC } from "utils/defineSafeFC";

const CommonStyles = createGlobalStyle``;

export default defineSafeFC("GlobalStyles", () => {
    return <CommonStyles />;
});
