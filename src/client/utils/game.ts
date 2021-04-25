import React from "react";
import type { CardType } from "@/components/Demo/Card";

export const cardCollection: CardType[] = ["fries", "cheeseburger", "ice-cream", "pizza", "milkshake", "hotdog"];

export function shuffle<T>(arr: T[]): T[] {
    const copy = [...arr];
    const N = arr.length;
    for (let i = 0; i < N; i++) {
        const randIndex = i + ((randomInt(N) % N) - i);
        const tmp = copy[i];
        copy[i] = copy[randIndex];
        copy[randIndex] = tmp;
    }
    return copy;
}

export function randomInt(n: number) {
    return Math.floor(Math.random() * n);
}

export function useGameCards() {
    const [cards, setCards] = React.useState<CardType[]>(shuffle([...cardCollection, ...cardCollection]));
    return [cards, () => setCards(shuffle(cards))] as const;
}

export const GameContext = React.createContext({
    seen: [] as CardType[],
    setSeen: (arr: CardType[]) => {},
});
