import { Button } from "@/ui/button";
import useCardGameStore from "@/store";

export default function ResetButton() {
  const resetGame = useCardGameStore((state) => state.resetGame);
  return (
    <Button className="bg-white text-black" onClick={resetGame}>
      Reset Game
    </Button>
  );
}
