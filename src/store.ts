import { create } from "zustand";
import { generateCards } from "@/lib/utils";
export interface Card {
  value: string;
  flip: boolean;
  label: string;
  cover: string;
  matched: boolean;
}

interface CardGameStore {
  cards: Card[];
  flipCard: (selectdCard: Card) => void;
  matchCard: (selectdCard: Partial<Card>, flippedCard: Partial<Card>) => void;
  resetGame: () => void;
}

const getFlippedCards = (cards: Card[]) => cards.filter((card) => card.flip);

const useCardGameStore = create<CardGameStore>((set, get) => ({
  cards: generateCards(),
  matchCard: (selectedCard: Partial<Card>, flippedCard: Partial<Card>) => {
    if (selectedCard.label === flippedCard.label) {
      set((state) => {
        return {
          cards: state.cards.map((card) => ({
            ...card,
            matched: selectedCard.label === card.label || card.matched,
          })),
        };
      });
    }
  },
  flipCard: (selectedCard: Partial<Card>) => {
    const flippedCards = getFlippedCards(get().cards).filter(
      (card) => !card.matched
    );
    if (flippedCards.length === 2) {
      set((state) => {
        return {
          cards: state.cards.map((card) => {
            return {
              ...(card as Card),
              flip:
                card.value === selectedCard.value
                  ? selectedCard.flip
                  : card.matched && card.flip,
            } as Card;
          }),
        };
      });
    } else {
      if (flippedCards.length === 1) {
        get().matchCard(selectedCard, flippedCards[0]);
      }
      set((state) => {
        return {
          cards: state.cards.map((card) => {
            return {
              ...(card as Card),
              flip:
                card.value === selectedCard.value
                  ? selectedCard.flip
                  : card.flip,
            } as Card;
          }),
        };
      });
    }
  },
  resetGame: () => set({ cards: generateCards() }),
}));

export default useCardGameStore;
