import { create } from "zustand";
import { generateCards } from "@/lib/utils";
export interface Card {
  value: string;
  facedown: boolean;
  label?: string;
  cover?: string;
  disabled: boolean;
}

interface CardGameStore {
  cards: Card[];
  flipCard: (selectdCard: Card) => void;
  matchCard: (selectdCard: Partial<Card>, flippedCard: Partial<Card>) => void;
  resetGame: () => void;
}

const getFlippedCards = (cards: Card[]) =>
  cards.filter((card) => !card.facedown);

const useCardGameStore = create<CardGameStore>((set, get) => ({
  cards: generateCards(),
  matchCard: (selectedCard: Partial<Card>, flippedCard: Partial<Card>) => {
    if (selectedCard.label === flippedCard.label) {
      set((state) => {
        return {
          cards: state.cards.map((card) => ({
            ...card,
            disabled: selectedCard.label === flippedCard.label,
          })),
        };
      });
    }
  },
  flipCard: (selectedCard: Partial<Card>) => {
    const flippedCards = getFlippedCards(get().cards);
    if (flippedCards.length === 1) {
      get().matchCard(selectedCard, flippedCards[0]);
    } else if (flippedCards.length > 1) {
      set((state) => {
        return {
          cards: state.cards.map((card) => {
            return {
              ...(card as Card),
              facedown:
                card.value === selectedCard.value
                  ? selectedCard.facedown
                  : true,
            } as Card;
          }),
        };
      });
    } else {
      set((state) => {
        return {
          cards: state.cards.map((card) => {
            return {
              ...(card as Card),
              facedown:
                card.value === selectedCard.value
                  ? selectedCard.facedown
                  : card.facedown,
            } as Card;
          }),
        };
      });
    }

    set((state) => {
      const flippedCards = getFlippedCards(state.cards);
      if (flippedCards.length === 2) {
        return {
          cards: state.cards.map((card) => {
            return {
              ...(card as Card),
              facedown:
                card.value === selectedCard.value
                  ? selectedCard.facedown
                  : true,
            } as Card;
          }),
        };
      }
      return {
        cards: state.cards.map((card) => {
          return {
            ...(card as Card),
            facedown:
              card.value === selectedCard.value
                ? selectedCard.facedown
                : card.facedown,
          } as Card;
        }),
      };
    });
  },
  resetGame: () => set({ cards: generateCards() }),
}));

export default useCardGameStore;
