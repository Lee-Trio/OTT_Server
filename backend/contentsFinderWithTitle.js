import { tempData } from "./temp_data.js";
export const contentsFinderWithTitle = (dataTitle) => {
  for (let i = 0; i < tempData.length; i++) {
    if (tempData[i].title === dataTitle) {
      return tempData[i];
    }
  }
};
