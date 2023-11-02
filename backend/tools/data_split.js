import { readFile } from "fs/promises";
import isNull from "./isNull.js";

// const all_data = JSON.parse(
//   await readFile("./contents_data/all_data.json", "utf8")
// );
const ranking_data = JSON.parse(
  await readFile("./contents_data/ranking/ranking_data.json", "utf8")
);
const movie_ranking_data = JSON.parse(
  await readFile("./contents_data/ranking/movie_ranking_data.json", "utf8")
);
const tv_series_ranking_data = JSON.parse(
  await readFile("./contents_data/ranking/tv_series_ranking_data.json", "utf8")
);

export const data_split = (company, type) => {
  let data;
  const object = new Array();

  switch (type) {
    case "movie":
      data = movie_ranking_data;
      break;
    case "tv":
      data = tv_series_ranking_data;
      break;
    case "all":
      data = ranking_data;
      break;
    default:
      return "잘못된 타입입니다.";
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].ott === company) {
      object.push(data[i]);
    }
  }
  if (isNull(object)) {
    return "noData exit:data_split";
  } else {
    return object;
  }
};
