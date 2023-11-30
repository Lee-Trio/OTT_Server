import express, { json } from "express";
import {
  DBRead,
  __create,
  __delete,
  __update,
  __readID,
  __readString,
  DBOutputJson,
  DBAllRead,
} from "../toolsDB/DBmain.js";

const router = express.Router();

// contentDB를 이용하는 DBmain.js 이다 .
// /DBmain/'밑 명령어' 형식으로 사용하며
// DB를 참조해오는 곳은 /toolsDB/DBmain.js 를 참조해서 사용한다.

//데이터를 새롭게 입력( 없으면 DB에 새로 저장, 있으면 OTT를 확인해서 추가 혹은 저장하지 않는다. )
router.post("/__create", async (req, res) => {
  const jsonData = req.body;
  await __create(jsonData);
  res.send(200);
});

// contentDB에서 title과 year로 검색을 해온다.
// year는 현재 사용하지 않음
router.get("/__read", async (req, res) => {
  const title = req.query.title;
  const year = req.query.year;
  const result = await DBRead(title, year);
  res.send(result);
});

// contentDB를 업데이트 한다
// 확실한 업데이트를 위해 json 형식을 다 받는다.
// json 형식은 정확하게 DB형식을 따라 줘야한다.
router.put("/__update", async (req, res) => {
  const jsonData = req.body;
  await __update(jsonData);
  res.send(200);
});

// contentDB를 삭제한다.
// 확실한 삭제를 위해 json 형식을 전부 다 받는다.
router.delete("/__delete", async (req, res) => {
  const jsonData = req.body;
  await __delete(jsonData);
  res.send(200);
});

// contentDB에서 검색을 한다.
// searchID 혹은 searchString을 입력받아 검색을 한다.
router.get("/DBFinder", async (req, res) => {
  const searchID = req.query.id;
  const searchString = req.query.string;
  let result;
  if (!searchID) result = await __readString(searchString);
  else if (!searchString) result = await __readID(searchID);
  else result = "empty query";
  res.send(result);
});

//contentDB를 전부 json형태로 내보낸다음 저장한다.
//이후 dataBackup를 같이 사용하면 zip형식으로 저장이 된다.
router.post("/DBOutputJson", async (_, res) => {
  await DBOutputJson();
  res.send(200);
});

// router.get("/test", async (_, res) => {
//   const result = await DBAllRead();
//   res.send(result);
// });

export default router;
