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
