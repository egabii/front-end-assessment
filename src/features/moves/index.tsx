import useCardGameStore from "@/store";

export default function Moves() {
  const moves = useCardGameStore((state) => state.moves);
  return (
    <div className="flex flex-wrap p-4 justify-between">
      <p className="text-lg font-bold">Moves: {moves}</p>
    </div>
  );
}
