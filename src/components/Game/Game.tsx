import React, { useEffect, useState } from "react";
import Board from "../Board";
import Card, { ImageProps } from "../Card/Card";
import { getImagesIdsUrl } from "../../shared/requests/getImagesId";
import { createStateObj } from "./functions";

function Game({ gridSize = 5 }: GameProps) {
  const [cards, setCards] = useState([
    {
      imageId: 0,
      isFlipped: false,
      isInAPair: false,
    },
  ]);

  useEffect(() => {
    getImagesIdsUrl().then((res) =>
      setCards(createStateObj(res.data) as ImageProps[])
    );
  }, []);

  return (
    <Board>
      {cards.length > 1 &&
        cards.map((image, index: number) => (
          <Card
            key={index}
            index={index}
            gridSize={gridSize}
            card={image}
            setCards={setCards}
            cards={cards}
          />
        ))}
    </Board>
  );
}

export default Game;

interface GameProps {
  gridSize?: number;
}
