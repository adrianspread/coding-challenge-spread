import { IMAGES_IDS_URL } from "../consts";

export const getImagesIdsUrl = (): Promise<{ data: number[] }> => {
  return fetch(IMAGES_IDS_URL).then((response) => {
    return response.json();
  });
};
