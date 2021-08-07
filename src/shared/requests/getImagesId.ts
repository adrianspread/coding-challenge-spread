import {fetch} from "../../service";
import {IMAGES_IDS_URL} from "../consts";

export const getImagesIds = () => fetch(IMAGES_IDS_URL, 5)
    .then((res) => {
            return res.json()
        }
    )

