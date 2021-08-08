import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Board from "../Board";
import Card, { ImageProps } from "../Card/Card";

import { getImagesIds } from "../../shared/requests/getImagesId";
import { createStateObj } from "./functions";
import { notify } from "../../shared/helpers/errorHandeling";

function Game({ gridSize = 5 }: GameProps) {
  const [cards, setCards] = useState([
    {
      imageId: 0,
      isFlipped: false,
      isInAPair: false,
    },
  ]);

  useEffect(() => {
    getImagesIds(5)
      .then((body) => {
        setCards(createStateObj(body) as ImageProps[]);
      })
      .catch((err) => {
        // handling backend errors in frontend
        notify(`${err.message}. Please reload the page.`);
        console.error(err);
      });
  }, []);

  return (
    <Board>
      {cards &&
        cards.length > 1 &&
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
