import express from "express";
import { rankingSplitCompany } from "../tools/rankingSplitCompany.js";
const router = express.Router();

router.get("/rankingData", (req, res) => {
  const company = req.query.company;
  const type = req.query.type;
  const result = rankingSplitCompany(company, type);
  res.send(result);
});

export default router;
