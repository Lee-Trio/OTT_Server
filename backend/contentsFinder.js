import { tempData } from "./temp_data.js";

export const contentsFinderWithNumber = (dataNumber) => {
  if (0 <= dataNumber && dataNumber <= tempData.length) {
    return tempData[dataNumber];
  } else {
    return "no Data";
  }
};

export const contentsFinderWithTitle = (dataTitle) => {
  for (let i = 0; i < tempData.length; i++) {
    if (tempData[i].title === dataTitle) {
      return tempData[i];
    }
  }
  return "no Data";
};
