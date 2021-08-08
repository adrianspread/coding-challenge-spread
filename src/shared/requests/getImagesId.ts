import { fetch } from "../../service";
import { IMAGES_IDS_URL } from "../consts";

export const getImagesIds = (gridSize: number) =>
  fetch(IMAGES_IDS_URL, gridSize).then((res) => {
    return res.json();
  });
