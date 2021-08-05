import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import CardWrapper from "./CardWrapper";
import CardImage from "./CardImage";
import CardBack from "./CardBack";

export default function Card({
  setCards,
  cards,
  card,
  index,
  ...props
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { imageId } = card;

  const toggleFlipped = useCallback(
    (clickedCardIndex: number) => {
      let cardsCopy = [...cards];
      const cardToFlip = { ...card };
      const isFlippedPair =
        cardsCopy.filter(
          (card) => card.imageId === imageId && card.isFlipped && card.isInAPair
        ).length === 2;

      const areTwoCardsFlippedThatAreNotAPair =
        cardsCopy.filter((card) => card.isFlipped && !card.isInAPair).length ===
          2 && !card.isFlipped;

      // if a clicked not flipped card and two other cards flipped do nothing
      if (areTwoCardsFlippedThatAreNotAPair) {
        return;
      }

      // if a clicked flipped card has a flipped pair do nothing
      if (isFlippedPair) {
        return;
      }

      // change flag to flipped
      cardToFlip.isFlipped = !isFlipped;
      cardsCopy[index] = cardToFlip;

      // if there is a pair of flipped cards change flag isInAPair for this pair
      if (
        cards.filter((card) => card.imageId === imageId && card.isFlipped)
          .length === 1
      ) {
        cardsCopy = cardsCopy.map((card) => {
          if (card.imageId === imageId && card.isFlipped) {
            return {
              ...card,
              isInAPair: true,
            };
          } else {
            return card;
          }
        });
      }

      setCards((state) => cardsCopy);
      setIsFlipped(!isFlipped);
    },
    [setCards, cards, card]
  );

  return (
    <CardWrapper
      {...props}
      isFlipped={isFlipped}
      onClick={() => toggleFlipped(index)}
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
  imageId?: number;
  isFlipped?: boolean;
  isInAPair?: boolean;
}
