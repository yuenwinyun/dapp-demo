import React from "react";
import { styled } from "@twstyled/core";
import { GameBoard } from "@/components/Demo/GameBoard";
import { useGameCards, GameContext } from "@/utils/game";
import { CardType } from "@/components/Demo/Card";
// import { useTokenFarmContract } from "@/utils/blockchain";

const Container = styled.div`
    @tailwind my-20 mx-0 flex flex-col justify-center space-y-10;
`;

const Button = styled.button`
    @tailwind font-semibold text-sm px-3 py-2 rounded-lg bg-green-500 shadow-lg;
    @tailwind hover:bg-green-400 hover:-translate-y-0.5 text-white transform transition uppercase flex-grow-0;
`;

export const Demo = defineSafeFC("Demo", () => {
    const [cards, shuffleCards] = useGameCards();
    const [seen, setSeen] = React.useState<CardType[]>([]);
    // const contract = useTokenFarmContract();

    const onRestart = () => {
        shuffleCards();
        setSeen([]);
    };

    return (
        <GameContext.Provider value={{ seen, setSeen }}>
            <Container>
                <GameBoard cards={cards} />
                <Button onClick={onRestart}>restart</Button>
            </Container>
        </GameContext.Provider>
    );
});
