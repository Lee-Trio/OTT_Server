// import { tempData } from "../data/temp_data.js";
import { readFile } from "fs/promises";
const all_data = JSON.parse(
  await readFile("./contents_data/all_data.json", "utf8")
);

export const contentsFinderWithNumber = (dataNumber) => {
  if (0 <= dataNumber && dataNumber <= all_data.length) {
    return all_data[dataNumber];
  } else {
    return "no Data";
  }
};

export const contentsFinderWithTitle = (dataTitle) => {
  for (let i = 0; i < all_data.length; i++) {
    if (all_data[i].title === dataTitle) {
      return all_data[i];
    }
  }
  return "no Data";
};

export const contentsFinderWithMultiNumber = (dataNumbers) => {
  const dataNumber = dataNumbers.split(",");
  const result = new Array();
  for (let i = 0; i < dataNumber.length; i++) {
    result.push(contentsFinderWithNumber(dataNumber[i]));
  }
  return result;
};

export const contentsFinderWithMultiTitle = (dataTitles) => {
  const dataTitle = dataTitles.split(",");
  const result = new Array();
  for (let i = 0; i < dataTitle.length; i++) {
    result.push(contentsFinderWithTitle(dataTitle[i]));
  }
  return result;
};
