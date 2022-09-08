import { ERROR_TEXT } from "./constants";

export const converterToRgb = (color) => {
  let bigint = parseInt(color.split("#")[1], 16);

  if (!isNaN(bigint)) {
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return "rgb(" + r + "," + g + "," + b + ")";
  }
  return ERROR_TEXT;
};

export const getStyleBackground = (value) => value === ERROR_TEXT ? "#CC3300" : value;
