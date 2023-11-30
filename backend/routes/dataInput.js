import express from "express";
import { dataBackup } from "../toolsJson/dataBackup.js";
import { dataInput } from "../toolsJson/dataInput.js";
import isNull from "../tools/isNull.js";

const router = express.Router();

// json 파일을 입력받기 위한 js 파일이다.
// /datainput/'밑 명령어' 를 사용하면 된다.

// json 파일을 전부 압축을 하여 dataBackup.zip으로 저장한다.
router.post("/dataBackup", (_, res) => {
  const result = dataBackup();
  res.send(result);
});

// input을 받으면 json 파일에 적히게 된다.
// 사용하기 전에 /dataBackup은 필수
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
