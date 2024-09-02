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
        <div className="cardgame-back flex items-center justify-center">
          {props.cover.trim() === "" ? (
            <svg
              width={64}
              height={64}
              data-name="Layer 1"
              viewBox="0 0 163.29 45.09"
            >
              <path
                fill="#fff"
                d="M0 44.28l13.61-20.16H1.69V20.3h19.05v.29L7.14 40.67h13.24v3.83H0v-.22zM26.48 20.3h4.56v24.2h-4.56zM37.14 32.44a12.37 12.37 0 0112.51-12.73c4.26 0 7.28 1.4 9.56 3.9l-3 2.72a8.56 8.56 0 00-6.54-2.72c-4.71 0-7.8 3.83-7.8 8.83s3.09 8.75 7.8 8.75a9.21 9.21 0 007.13-3l3 2.65c-2.28 2.72-5.59 4.27-10.15 4.27a12.35 12.35 0 01-12.51-12.67M80.54 29.64c0-4.49-2.21-6.1-5.66-6.1A7.85 7.85 0 0068.03 27l-2.86-2.51a11.55 11.55 0 019.85-4.78c6.18 0 10 3.24 10 9.93V44.5h-4.48v-2.72a9.34 9.34 0 01-7.58 3.31c-5.07 0-9.19-2.5-9.19-7.8 0-4.93 4.34-7.43 9.49-7.43h7.28v-.22zm-7 3.83c-2.94 0-5.29 1.1-5.29 3.82s2.06 4.12 5.44 4.12c3.6 0 6.84-1.91 6.84-5.29v-2.65zM90.1 39.79l3.38-2.42a8 8 0 007.14 3.89c3.09 0 4.86-1.18 4.86-3.23 0-2.21-1.7-3-5.89-4.12-5-1.4-7.72-3.24-7.72-7.51 0-4 3.23-6.69 8.09-6.69a10.11 10.11 0 018.53 3.9l-3.2 2.65a6.36 6.36 0 00-5.37-2.72c-2.58 0-3.9 1.25-3.9 2.72 0 2.13 1.62 2.65 5.37 3.68 5.44 1.47 8.38 3.38 8.38 7.79 0 4.56-3.45 7.36-9.19 7.36a12.08 12.08 0 01-10.52-5.3M113.49 39.79l3.39-2.42a8 8 0 007.13 3.89c3.09 0 4.85-1.18 4.85-3.23 0-2.21-1.69-3-5.88-4.12-5-1.4-7.72-3.24-7.72-7.51 0-4 3.23-6.69 8.09-6.69a10.09 10.09 0 018.53 3.9l-3.16 2.65a6.36 6.36 0 00-5.37-2.72c-2.58 0-3.9 1.25-3.9 2.72 0 2.13 1.62 2.65 5.37 3.68 5.44 1.47 8.38 3.38 8.38 7.79 0 4.56-3.45 7.36-9.19 7.36a12.08 12.08 0 01-10.52-5.3M137.62 32.44a12.84 12.84 0 1112.87 12.65 12.58 12.58 0 01-12.87-12.65m21 0c0-5.08-3.3-8.9-8.16-8.9s-8.17 3.82-8.17 8.9 3.31 8.82 8.16 8.82 8.16-3.82 8.16-8.82"
              ></path>
              <path
                d="M25.74 8.12a3.09 3.09 0 113.09 3.09 3.11 3.11 0 01-3.09-3.09"
                fill="#ffcf01"
              ></path>
              <path
                d="M20.71 8.12a8.12 8.12 0 118.12 8.12 8.13 8.13 0 01-8.12-8.12m1.9 0a6.22 6.22 0 106.22-6.22 6.23 6.23 0 00-6.22 6.22"
                fill="#b5121b"
              ></path>
            </svg>
          ) : (
            props.cover
          )}
        </div>
        <div
          className={`cardgame-front flex items-center justify-center text-4xl ${
            props.matched ? "bg-lime-500" : "bg-lime-100"
          }`}
        >
          {String.fromCharCode(parseInt(props.label))}
        </div>
      </div>
    </CardShadcn>
  );
}
