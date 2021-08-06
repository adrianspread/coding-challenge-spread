import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import CardWrapper from "../CardWrapper";
import CardImage from "../CardImage";
import CardBack from "../CardBack";
import { toggleFlipped } from "./functions";

export default function Card({
  setCards,
  cards,
  card,
  index,
  ...props
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { imageId } = card;

  return (
    <CardWrapper
      {...props}
      isFlipped={isFlipped}
      onClick={() =>
        toggleFlipped(
          cards,
          card,
          setCards,
          setIsFlipped,
          imageId,
          index,
          isFlipped
        )
      }
    >
      <CardBack />
      <CardImage
        src={`https://picsum.photos/id/${imageId}/600`}
        alt={`${imageId}`}
      />
    </CardWrapper>
  );
}

interface CardProps {
  index: number;
  gridSize: number;
  card: ImageProps;
  setCards: Dispatch<SetStateAction<ImageProps[]>>;
  cards: ImageProps[];
}

export interface ImageProps {
  imageId: number;
  isFlipped: boolean;
  isInAPair: boolean;
}
