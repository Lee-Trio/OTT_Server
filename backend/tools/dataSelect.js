import { readFile } from "fs/promises";
// all data
const all_data = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/all_data.json",
    "utf8"
  )
);
// movie data
const DisneyPlusMovie = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/movie/DisneyPlus_movie.json",
    "utf8"
  )
);
const NetflixMovie = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/movie/Netflix_movie.json",
    "utf8"
  )
);
const WatchaMovie = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/movie/Watcha_movie.json",
    "utf8"
  )
);
// const TvingMovie = JSON.parse(await readFile());

// tv series data
const DisneyPlusTVSeries = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/tvSeries/DisneyPlus_tvSeries.json",
    "utf8"
  )
);
const NetflixTVSeries = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/tvSeries/Netflix_tvSeries.json",
    "utf8"
  )
);
const WatchaTVSeries = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/tvSeries/Netflix_tvSeries.json",
    "utf8"
  )
);
// const TvingTVSeries = JSON.parse(await readFile());

// ranking data
const movieRankingData = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/ranking/movie_ranking_data.json",
    "utf8"
  )
);
const rankingData = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/ranking/ranking_data.json",
    "utf8"
  )
);
const tvSeriesRankingData = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/ranking/tv_series_ranking_data.json",
    "utf8"
  )
);

// data
// movie or tv or all or ranking
// netflix or disney or tving or watcha

export const dataSelect = (type1, type2) => {
  // type1 : movie or tv or all or ranking
  // type2 : company or ranking ( tv, movie, all )
  switch (type1) {
    case "all":
      return all_data;
      break;
    case "movie":
      switch (
        type2 // company
      ) {
        case "disney":
          return DisneyPlusMovie;
          break;
        case "netflix":
          return NetflixMovie;
          break;
        case "watcha":
          return WatchaMovie;
          break;
        //   case "tving":
        //     return TvingMovie;
        //     break;
        default:
          return "long company exit:data.select.js > dataSelect";
      }
      break;
    case "tv":
      switch (
        type2 //company
      ) {
        case "disney":
          return DisneyPlusTVSeries;
          break;
        case "netflix":
          return NetflixTVSeries;
          break;
        case "watcha":
          return WatchaTVSeries;
          break;
        // case "tving":
        //   return TvingTVSeries;
        //   break;
        default:
          return "long company exit:data.select.js > dataSelect";
      }
      break;
    case "ranking":
      switch (
        type2 // movieRanking or allRanking or tvSeriesRanking
      ) {
        case "all":
          return rankingData;
          break;
        case "tv":
          return tvSeriesRankingData;
          break;
        case "movie":
          return movieRankingData;
          break;
        default:
          return "long type2:rankingType exit:data_select.js > dataSelect";
      }
      break;
    default:
      return "long type1 exit:data_select.js > dataSelect";
  }
};
