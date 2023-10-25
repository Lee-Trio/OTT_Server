import { tving } from "./data/TvingRanking.js";
import { disneyPlus } from "./data/disneyPlusRanking.js";
import { netflix } from "./data/netflixRanking.js";
import { watcha } from "./data/WatchaRanking.js";

const isNull = (ranking) => {
  if (ranking.length === 0) {
    return true;
  } else {
    return false;
  }
};

export const rankingData = (company) => {
  switch (company) {
    case "disney":
      if (isNull(disneyPlus)) return "noData";
      else return disneyPlus;
      break;
    case "tving":
      if (isNull(tving)) return "noData";
      else return tving;
      break;
    case "watcha":
      if (isNull(watcha)) return "noData";
      else return watch;
      break;
    case "netflix":
      if (isNull(netflix)) return "noData";
      else return netflix;
      break;
    default:
      console.error("잘못된 호출입니다.");
  }
};
