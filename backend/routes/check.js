import express from "express";
import { dataSelect } from "../tools/dataSelect.js";

const router = express.Router();

// all data output
router.get("/all_data", (_, res) => {
  const all_data = dataSelect("all");
  res.send(all_data);
});

// movie data output
router.get("/DisneyPlusMovie", (_, res) => {
  const DisneyPlusMovie = dataSelect("movie", "disney");
  res.send(DisneyPlusMovie);
});
router.get("/NetflixMovie", (_, res) => {
  const NetflixMovie = dataSelect("movie", "netflix");
  res.send(NetflixMovie);
});
router.get("/WatchaMovie", (_, res) => {
  const WatchaMovie = dataSelect("movie", "watcha");
  res.send(WatchaMovie);
});
router.get("/TvingMovie", (_, res) => {
  // const TvingMovie = dataSelect("movie", "tving");
  // res.send(TvingMovie);
  res.send("coming soon");
});

// tv series data output
router.get("/DisneyPlusTVSeries", (_, res) => {
  const DisneyPlusTVSeries = dataSelect("tv", "disney");
  res.send(DisneyPlusTVSeries);
});
router.get("/NetflixTVSeries", (_, res) => {
  const NetflixTVSeries = dataSelect("tv", "netflix");
  res.send(NetflixTVSeries);
});
router.get("/WatchaTVSeries", (_, res) => {
  const WatchaTVSeries = dataSelect("tv", "watcha");
  res.send(WatchaTVSeries);
});
router.get("/TvingTVSeries", (_, res) => {
  // const TvingTVSeries = dataSelect("tv", "tving");
  // res.send(TvingTVSeries);
  res.send("coming soon");
});

export default router;
