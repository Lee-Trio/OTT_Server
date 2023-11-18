import express from "express";
import { dataBackup } from "../toolsJson/dataBackup.js";
import { dataInput } from "../toolsJson/dataInput.js";
import isNull from "../toolsJson/isNull.js";

const router = express.Router();

router.post("/dataBackup", (_, res) => {
  const result = dataBackup();
  res.send(result);
});

router.post("/", (req, res) => {
  const type = req.query.type;
  const jsonData = req.body;
  if (jsonData.length === undefined) {
    res.send("jsonData(body) is Null");
  } else {
    const result = dataInput(type, jsonData);
    res.send(result);
  }
});
export default router;
