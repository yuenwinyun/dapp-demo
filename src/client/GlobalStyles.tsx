import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";
import { defineSafeFC } from "utils/defineSafeFC";

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`;

export default defineSafeFC("GlobalStyles", () => {
    return (
        <React.Fragment>
            <BaseStyles />
            <CustomStyles />
        </React.Fragment>
    );
});
