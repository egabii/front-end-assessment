import useCardGameStore from "@/store";
import { RocketIcon } from "@radix-ui/react-icons";

export default function Moves() {
  const moves = useCardGameStore((state) => state.moves);
  const cards = useCardGameStore((state) => state.cards);
  const AreAllMatches = cards.every((card) => card.matched);
  return (
    <div className="flex flex-wrap p-4 justify-between">
      <p className="text-lg font-bold">Moves: {moves}</p>
      {AreAllMatches && (
        <p className="text-lg font-bold flex flex-wrap gap-2">
          <RocketIcon width={24} height={24} /> You Win!!!!!
        </p>
      )}
    </div>
  );
}
