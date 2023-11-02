import express, { json } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import { tempData } from "./data/temp_data.js";
import {
  contentsFinderWithNumber,
  contentsFinderWithTitle,
  contentsFinderWithMultiNumber,
  contentsFinderWithMultiTitle,
} from "./getData/contentsFinder.js";
import { rankingData } from "./getData/rankingPop.js";
import { readFile } from "fs/promises";

// const data = await readFile("./contents_data/all_data.json", "utf8");
const all_data = JSON.parse(
  await readFile("./contents_data/all_data.json", "utf8")
);

const swaggerSpec = swaggerJsdoc(options);
const app = express();
app.use(express.json()); // 과거에는 bodyParser 사용
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// use == post , get
app.get("/Ping", (req, res) => {
  res.send("Pong");
});

app.get("/allDataList", (req, res) => {
  const result = tempData;
  res.send(result);
});

app.get("/allDataCount", (req, res) => {
  const result = tempData.length;
  res.send("총 갯수는: " + result);
});

app.get("/oneDataWithNumber", (req, res) => {
  const dataNumber = req.query.dataNumber;
  const result = contentsFinderWithNumber(dataNumber);
  res.send(result);
});

app.get("/oneDataWithTitle", (req, res) => {
  const dataTitle = req.query.dataTitle;
  const result = contentsFinderWithTitle(dataTitle);
  res.send(result);
});

app.get("/multiDataWithNumbers", (req, res) => {
  const dataNumbers = req.query.dataNumbers;
  const result = contentsFinderWithMultiNumber(dataNumbers);
  res.send(result);
});

app.get("/multiDataWithTitles", (req, res) => {
  const dataTitles = req.query.dataTitles;
  const result = contentsFinderWithMultiTitle(dataTitles);
  res.send(result);
});

app.get("/rankingData", (req, res) => {
  const company = req.query.company;
  const result = rankingData(company);
  res.send(result);
});

app.get("/rankingDataTemp", (req, res) => {
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

app.get("/all_data", (req, res) => {
  console.log(all_data.length);
  res.send(all_data);
});

app.listen(3000); // 기다린다는 말
