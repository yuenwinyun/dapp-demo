import React from "react";
import { useWeb3React } from "@web3-react/core";
import { styled } from "@twstyled/core";

const Container = styled.div`
    @tailwind flex items-center;
`;

const UserIcon = styled.span`
    @tailwind inline-block;

    background: url("./asset/user-icon.svg") no-repeat;
    width: 1rem;
    height: 1rem;
`;

const Username = styled.span`
    @tailwind text-sm text-gray-500;
`;

export const Account = defineSafeFC("Account", () => {
    const { account } = useWeb3React();

    return (
        <Container>
            <UserIcon />
            <Username>{account}</Username>
        </Container>
    );
});
