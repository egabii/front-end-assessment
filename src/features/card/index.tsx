import { Card as CardShadcn } from "@/ui/card";
import useCardGameStore from "@/store";
import "./card.css";

interface CardGameProps {
  value: string;
  label: string;
  cover: string;
  flip: boolean;
  matched: boolean;
}

export default function Card(props: CardGameProps) {
  const flipCard = useCardGameStore((state) => state.flipCard);
  const countMove = useCardGameStore((state) => state.countMove);
  return (
    <CardShadcn
      className={`cardgame rounded ${props.flip ? "flipped" : ""}`}
      onClick={() => {
        if (!props.matched && !props.flip) {
          // Revisit this issue, it shouldn't force to arrange all object if flipCard recieves a partial object
          flipCard({
            ...props,
            flip: true,
          });
          countMove();
        }
      }}
    >
      <div className="cardgame-inner">
        <div className="cardgame-back flex items-center">
          {"This is a cover"}
        </div>
        <div
          className={`cardgame-front flex items-center ${
            props.matched ? "bg-lime-500" : ""
          }`}
        >
          {props.label ?? props.value}
        </div>
      </div>
    </CardShadcn>
  );
}
