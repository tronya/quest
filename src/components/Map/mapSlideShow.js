import {moveCamera} from "./moveCamera";
//import {showPoint} from "./showPoints";

export const mapSlideShow = (markers) => {
  let currentPoint = 0;

  setInterval(() => {
    moveCamera(markers, currentPoint);
    if (currentPoint < markers.length - 1) {
      currentPoint++;
    } else {
      currentPoint = 0;
    }
  }, 7000);
};