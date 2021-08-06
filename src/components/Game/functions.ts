import { ImageProps } from "../Card/Card";

export const createStateObj = (imagesIdsArr: number[]): ImageProps[] => {
  return (
    imagesIdsArr &&
    imagesIdsArr.map((id) => ({
      imageId: id,
      isFlipped: false,
      isInAPair: false,
    }))
  );
};
