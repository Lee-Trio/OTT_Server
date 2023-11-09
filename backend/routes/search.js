import express from "express";
import {
  title as searchTitle,
  number as searchNumber,
} from "../tools/dataSearch.js";
const router = express.Router();

// all data search
router.get("/all/title", (req, res) => {
  const searchString = req.query.searchString;
  const result = searchTitle(searchString, "all");
  res.send(result);
});
router.get("/all/number", (req, res) => {
  const Number = req.query.searchNumber;
  const result = searchNumber(Number, "all");
  res.send(result);
});

// tv series data search
router.get("/tv/title", (req, res) => {
  const searchString = req.query.searchString;
  const company = req.query.company;
  const result = searchTitle(searchString, "tv", company);
  res.send(result);
});
router.get("/tv/number", (req, res) => {
  const Number = req.query.searchNumber;
  const company = req.query.company;
  const result = searchNumber(Number, "tv", company);
  res.send(result);
});

// movie data search
router.get("/movie/title", (req, res) => {
  const searchString = req.query.searchString;
  const company = req.query.company;
  const result = searchTitle(searchString, "movie", company);
  res.send(result);
});
router.get("/movie/number", (req, res) => {
  const Number = req.query.searchNumber;
  const company = req.query.company;
  const result = searchNumber(Number, "movie", company);
  res.send(result);
});

export default router;
