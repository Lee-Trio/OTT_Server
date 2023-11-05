import express from "express";
import { ranking_Data } from "../getData/ranking.js";
const router = express.Router();

router.get("/rankingData", (req, res) => {
  const company = req.query.company;
  const type = req.query.type;
  const result = ranking_Data(company, type);
  res.send(result);
});

export default router;
