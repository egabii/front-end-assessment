import {
  Card as CardShadcn,
  CardContent as CardContentShadcn,
} from "@/ui/card";
import useCardGameStore from "@/store";

type CardGameProps = {
  value: string;
  label?: string;
  cover?: string;
  facedown: boolean;
  disabled: boolean;
};

export default function Card(props: CardGameProps) {
  const flipCard = useCardGameStore((state) => state.flipCard);
  const cardClassNames = `rounded ${props.disabled ? "opacity-5" : ""}`;
  return (
    <CardShadcn
      className={cardClassNames}
      onClick={() => {
        if (!props.disabled && props.facedown) {
          flipCard({
            value: props.value,
            disabled: false,
            facedown: !props.facedown,
          });
        }
      }}
    >
      <CardContentShadcn>
        {props.facedown ? (
          <p className="flex items-center">
            {props.cover ?? "This is a cover"}
          </p>
        ) : (
          <p className="flex items-center">{props.label ?? props.value}</p>
        )}
      </CardContentShadcn>
    </CardShadcn>
  );
}
