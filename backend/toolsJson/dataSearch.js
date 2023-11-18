import isNull from "../tools/isNull.js";
import { dataSelect } from "./dataSelect.js";
import { textFilter } from "../tools/textFilter.js";
// type1 : all or movie or tv or ranking
// type2 : company or ranking type ( all, movie, tv )

const limit = 10;
export const title = (searchString, type1, type2) => {
  const result = new Array();

  const data = dataSelect(type1, type2);
  // if (data.includes("long")) return data;

  const searchData = textFilter(searchString);
  console.log(searchData);
  if (searchData === "")
    return "noData : Plz Input searchData exit:search.js > title";

  for (let i = 0; i < data.length; i++) {
    let tempData = data[i].title.replace(/ /g, "");
    if (tempData.includes(searchData)) {
      result.push(data[i]);
    }
    if (result.length === limit) return result;
  }
  if (isNull(result)) {
    return "noData or Long SearchString exit:search.js > title";
  } else {
    return result;
  }
};

export const number = (searchNumber, type1, type2) => {
  const data = dataSelect(type1, type2);
  if (data.includes("long")) return data;
  if (0 <= searchNumber && searchNumber <= data.length) {
    return data[searchNumber];
  } else {
    return "noData or Long Number exit:search.js > number";
  }
};
