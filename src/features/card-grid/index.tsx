import CardGame from "../card";
import useCardGameStore from "@/store";

export default function CardGrid() {
  const cards = useCardGameStore((state) => state.cards);
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 border-box border-2 p-2 rounded">
      {cards.map((card) => (
        <CardGame key={card.value} {...card} />
      ))}
    </section>
  );
}
