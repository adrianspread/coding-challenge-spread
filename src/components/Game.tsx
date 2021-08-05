import React, { useEffect, useState } from "react";
import Board from "./Board";
import Card from "./Card";

interface GameProps {
  gridSize?: number;
}

function Game({ gridSize = 5 }: GameProps) {
  const [cards, setCards] = useState([
    { imageId: 1, isFlipped: false, IsInAPair: false },
    { imageId: 2, isFlipped: false, IsInAPair: false },
    { imageId: 3, isFlipped: false, IsInAPair: false },
    { imageId: 4, isFlipped: false, IsInAPair: false },
    { imageId: 5, isFlipped: false, IsInAPair: false },
    { imageId: 1, isFlipped: false, IsInAPair: false },
    { imageId: 2, isFlipped: false, IsInAPair: false },
    { imageId: 3, isFlipped: false, IsInAPair: false },
    { imageId: 4, isFlipped: false, IsInAPair: false },
    { imageId: 5, isFlipped: false, IsInAPair: false },
  ]);

  useEffect(() => {
    // const response = fetch('/api/v2/imageIds', 5);
    // setCards((response.body as any))
  }, []);

  return (
    <Board>
      {cards.map((card, index: number) => (
        <Card
          key={index}
          index={index}
          gridSize={gridSize}
          card={card}
          setCards={setCards}
          cards={cards}
        />
      ))}
    </Board>
  );
}

export default Game;
