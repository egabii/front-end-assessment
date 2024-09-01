import { Button } from "@/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import useCardGameStore from "@/store";

export default function ResetButton() {
  const resetGame = useCardGameStore((state) => state.resetGame);
  return (
    <Button
      className="bg-white text-black  hover:bg-slate-400"
      onClick={resetGame}
      title="Reset Button"
    >
      <ReloadIcon width={20} height={20} />
      <span className="sr-only">Reset Button</span>
    </Button>
  );
}
