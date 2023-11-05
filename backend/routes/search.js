import express from "express";
import { search } from "../search/searchForAll.js";
const router = express.Router();

router.get("/", (req, res) => {
  const searchString = req.query.searchString;
  const result = search(searchString);
  res.send(result);
});

router.get("/tv", (req, res) => {
  const searchString = req.query.searchString;
  const result = searchForTv(searchString);
  res.send(result);
});

router.get("/movie", (req, res) => {
  const searchString = req.query.searchString;
  const result = searchForMovie(searchString);
  res.send(result);
});

export default router;
