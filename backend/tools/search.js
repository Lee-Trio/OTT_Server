import { readFile } from "fs/promises";
import isNull from "./isNull.js";

const all_data = JSON.parse(
  await readFile("./contents_data/all_data.json", "utf8")
);

export const search = (searchString) => {
  const result = new Array();
  const searchData = searchString.replace(/ /g, "");
  for (let i = 0; i < all_data.length; i++) {
    let data = all_data[i].title.replace(/ /g, "");
    if (data.includes(searchData)) {
      result.push(all_data[i]);
    }
  }
  if (result.length <= 0) {
    return "noData exit:search";
  } else {
    return result;
  }
};
