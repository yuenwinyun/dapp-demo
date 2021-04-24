import React from "react";
import { styled } from "@twstyled/core";
import { Card, CardType } from "@/components/Demo/Card";

interface Props {
    cards: CardType[];
}

const Container = styled.div`
    @tailwind grid grid-cols-4 gap-4;
`;

export const GameBoard = defineSafeFC<Props>("GameBoard", ({ cards }) => {
    return (
        <Container>
            {cards.map((card, index) => (
                <Card type={card} key={index} />
            ))}
        </Container>
    );
});
