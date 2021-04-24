import React from "react";
import { styled } from "@twstyled/core";
import { motion } from "framer-motion";
import { GameContext } from "@/utils/game";
import { useTokenFarmContract } from "@/utils/blockchain";

export type CardType = "fries" | "cheeseburger" | "ice-cream" | "pizza" | "milkshake" | "hotdog";

interface Props {
    type: CardType;
}

const Img = styled.img`
    @tailwind shadow-lg;
`;

export const Card = defineSafeFC<Props>("Card", ({ type }) => {
    const [cardType, setCardType] = React.useState<CardType | "blank">("blank");
    const { seen, setSeen } = React.useContext(GameContext);

    useTokenFarmContract();

    React.useEffect(() => {
        if (seen.length >= 2) {
            const [first, second] = seen;
            if (first === second) {
                console.log("ok");
            } else {
                setSeen([]);
            }
            setCardType("blank");
        } else if (seen.length === 0) {
            setCardType("blank");
        }
    }, [seen, setSeen]);

    const onFlip = () => {
        setCardType(type);
        setSeen([...seen, type]);
    };

    return (
        <motion.h2>
            <Img onClick={onFlip} src={getCardImage(cardType)} alt="dapp game card image" />
        </motion.h2>
    );
});

function getCardImage(type: CardType | "blank"): string {
    switch (type) {
        case "fries":
            return "/asset/fries.png";
        case "cheeseburger":
            return "/asset/cheeseburger.png";
        case "ice-cream":
            return "/asset/ice-cream.png";
        case "pizza":
            return "/asset/pizza.png";
        case "milkshake":
            return "/asset/milkshake.png";
        case "hotdog":
            return "/asset/hotdog.png";
        case "blank":
            return "/asset/blank.png";
    }
}
