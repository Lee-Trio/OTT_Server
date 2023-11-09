import express from "express";
import { readFile } from "fs/promises";
import {
  contentsFinderWithNumber,
  contentsFinderWithTitle,
  contentsFinderWithMultiNumber,
  contentsFinderWithMultiTitle,
} from "../tools/tempContentsFinder.js";
import { rankingData } from "../tempData/rankingPop.js";

const all_data = JSON.parse(
  await readFile(
    "/home/projectpc/teamProject/backend/contents_data/all_data.json",
    "utf8"
  )
);
const router = express.Router();

router.get("/all_data", (req, res) => {
  res.send(all_data);
});
router.get("/oneDataWithNumber", (req, res) => {
  const dataNumber = req.query.dataNumber;
  const result = contentsFinderWithNumber(dataNumber);
  res.send(result);
});

router.get("/oneDataWithTitle", (req, res) => {
  const dataTitle = req.query.dataTitle;
  const result = contentsFinderWithTitle(dataTitle);
  res.send(result);
});

router.get("/multiDataWithNumbers", (req, res) => {
  const dataNumbers = req.query.dataNumbers;
  const result = contentsFinderWithMultiNumber(dataNumbers);
  res.send(result);
});

router.get("/multiDataWithTitles", (req, res) => {
  const dataTitles = req.query.dataTitles;
  const result = contentsFinderWithMultiTitle(dataTitles);
  res.send(result);
});

router.get("/rankingDataTemp", (req, res) => {
  const company = req.query.company;
  const rankData = rankingData(company);
  const result = [];

  for (let i = 0; i < rankData.length; i++) {
    console.log(rankData[i].title);
    console.log(contentsFinderWithTitle(rankData[i].title));
    result.push(rankData[i].ranking);
  }

  console.log(result);
  res.send(result);
});

router.get("/allDataList", (req, res) => {
  const result = tempData;
  res.send(result);
});

router.get("/allDataCount", (req, res) => {
  const result = tempData.length;
  res.send("총 갯수는: " + result);
});

router.get("/rankingData", (req, res) => {
  const company = req.query.company;
  const result = rankingData(company);
  res.send(result);
});
export default router;
