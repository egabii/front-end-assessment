import useCardGameStore from "@/store";

export default function Moves() {
  const moves = useCardGameStore((state) => state.moves);
  return <p className="text-lg font-bold">Moves: {moves}</p>;
}
