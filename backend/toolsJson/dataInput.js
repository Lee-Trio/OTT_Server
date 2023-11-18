import fs from "fs";
import { dataBackup } from "./dataBackup.js";

const __dirname = "/home/projectpc/teamProject/backend";

const dataDelete = async (type) => {
  const dataPath = __dirname + "/contents_data";
  if (type === "rank") {
    try {
      fs.rmdirSync(dataPath + "/ranking", { recursive: true });
      console.log(`ranking_data is deleted!`);
    } catch (err) {
      console.error(`Error while deleting ranking.`);
    }
  } else if (type === "all") {
    try {
      fs.rmdirSync(dataPath + "/movie", { recursive: true });
      fs.rmdirSync(dataPath + "/tvSeries", { recursive: true });
      fs.unlinkSync(dataPath + "/all_data.json");
      console.log(`It has been deleted except for ranking data.`);
    } catch (err) {
      if (err.code == "ENOENT") {
        console.log("파일 삭제 Error 발생");
      } else {
        console.error(`Error while deleting ranking.`);
      }
    }
  }
};

const rankDataCreate = async (jsonData) => {
  const dataPath = __dirname + "/contents_data/ranking";
  const jsonString = JSON.stringify(jsonData);
  const movieArray = new Array();
  const tvSeriesArray = new Array();
  try {
    if (!fs.existsSync(dataPath)) {
      fs.mkdirSync(dataPath, { recursive: true });
    }
    fs.writeFileSync(dataPath + "/ranking_union.json", jsonString);

    const data = JSON.parse(jsonString);
    for (let i = 0; i < data.length; i++) {
      if (data[i].mt === "movie") movieArray.push(data[i]);
      else tvSeriesArray.push(data[i]);
    }
    const movieJson = JSON.stringify(movieArray);
    const tvSeriesJson = JSON.stringify(tvSeriesArray);
    fs.writeFileSync(dataPath + "/movie_ranking_data.json", movieJson);
    fs.writeFileSync(dataPath + "/tv_series_ranking_data.json", tvSeriesJson);

    console.log("JSON 파일이 성공적으로 생성되었습니다.");
  } catch (err) {
    console.error("파일 생성 중 오류 발생:", err);
  }
};

const allDataCreate = async (jsonData) => {
  const dataPath = __dirname + "/contents_data";
  const jsonString = JSON.stringify(jsonData);
  const movieDisney = new Array();
  const tvSeriesDisney = new Array();
  const movieNetflix = new Array();
  const tvSeriesNetflix = new Array();
  const movieWatcha = new Array();
  const tvSeriesWatcha = new Array();
  const movieTving = new Array();
  const tvSeriesTving = new Array();
  const other = new Array();
  try {
    fs.writeFileSync(dataPath + "/all_data.json", jsonString);
    if (!fs.existsSync(dataPath + "/movie")) {
      fs.mkdirSync(dataPath + "/movie", { recursive: true });
    }
    if (!fs.existsSync(dataPath + "/tvSeries")) {
      fs.mkdirSync(dataPath + "/tvSeries", { recursive: true });
    }
    const data = JSON.parse(jsonString);
    for (let i = 0; i < data.length; i++) {
      if (data[i].mt === "movie")
        switch (data[i].ott) {
          case "Disney Plus":
            movieDisney.push(data[i]);
            break;
          case "Netflix":
            movieNetflix.push(data[i]);
            break;
          case "Watcha":
            movieWatcha.push(data[i]);
            break;
          case "TVING":
            movieTving.push(data[i]);
            break;
          default:
            other.push(data[i]);
        }
      else if (data[i].mt === "tvSeries")
        switch (data[i].ott) {
          case "Disney Plus":
            tvSeriesDisneyDisney.push(data[i]);
            break;
          case "Netflix":
            tvSeriesNetflixNetflix.push(data[i]);
            break;
          case "Watcha":
            tvSeriesWatchaWatcha.push(data[i]);
            break;
          case "TVING":
            tvSeriesTvingTving.push(data[i]);
            break;
          default:
            other.push(data[i]);
        }
    }
    fs.writeFileSync(
      dataPath + "/movie/DisneyPlus_movie.json",
      JSON.stringify(movieDisney)
    );
    fs.writeFileSync(
      dataPath + "/movie/Netflix_movie.json",
      JSON.stringify(movieNetflix)
    );
    fs.writeFileSync(
      dataPath + "/movie/Watcha_movie.json",
      JSON.stringify(movieWatcha)
    );
    fs.writeFileSync(
      dataPath + "/movie/Tving_movie.json",
      JSON.stringify(movieTving)
    );

    fs.writeFileSync(
      dataPath + "/tvSeries/DisneyPlus_tvSeries.json",
      JSON.stringify(tvSeriesDisney)
    );
    fs.writeFileSync(
      dataPath + "/tvSeries/Netflix_tvSeries.json",
      JSON.stringify(tvSeriesNetflix)
    );
    fs.writeFileSync(
      dataPath + "/tvSeries/Watcha_tvSeries.json",
      JSON.stringify(tvSeriesWatcha)
    );
    fs.writeFileSync(
      dataPath + "/movie/Tving_tvSeries.json",
      JSON.stringify(tvSeriesTving)
    );
    // Use fs.writeFileSync to create files synchronously
    console.log("JSON 파일이 성공적으로 생성되었습니다.");
  } catch (err) {
    console.error("파일 생성 중 오류 발생:", err);
  }
};

export const dataInput = (type, jsonData) => {
  dataBackup();
  dataDelete(type);
  if (type === "rank") rankDataCreate(jsonData);
  else if (type === "all") allDataCreate(jsonData);

  return 200;
};
