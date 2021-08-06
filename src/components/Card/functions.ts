import { ImageProps } from "./Card";
import { Dispatch, SetStateAction } from "react";

export const toggleFlipped = (
  cards: ImageProps[],
  card: ImageProps,
  setCards: Dispatch<SetStateAction<ImageProps[]>>,
  setIsFlipped: Dispatch<SetStateAction<boolean>>,
  imageId?: number,
  index: number = 0,
  isFlipped?: boolean
) => {
  let cardsCopy = [...cards];
  const cardToFlip = { ...card };

  const isFlippedPair =
    cardsCopy.filter(
      (card) => card.imageId === imageId && card.isFlipped && card.isInAPair
    ).length === 2;

  const areTwoCardsFlippedThatAreNotAPair =
    cardsCopy.filter((card) => card.isFlipped && !card.isInAPair).length ===
      2 && !card.isFlipped;

  // if a clicked flipped card has a flipped pair do nothing
  if (isFlippedPair) {
    return;
  }

  // if a clicked not flipped card and two other cards flipped do nothing
  if (areTwoCardsFlippedThatAreNotAPair) {
    return;
  }

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
};
