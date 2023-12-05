import express, { json } from "express";
import {
  DBCreate,
  DBRead,
  DBUpdate,
  DBDelete,
  __create,
  __read,
  __update,
  __delete,
  DBOutputJson,
} from "../toolsDB/DBrank.js";

// rankingDB를 이용하는 DBrank.js 이다 .
// /DBrank/'밑 명령어' 형식으로 사용하며
// DB를 참조해오는 곳은 /toolsDB/DBrank.js 를 참조해서 사용한다.
const router = express.Router();

// rankingDB 에 다량의 데이터를 생성하는 api이다 .
// json.body 타입으로 보내온 데이터를 매개변수로 보낸다.
router.post("/__create", async (req, res) => {
  const jsonData = req.body;
  await __create(jsonData);
  res.send(200);
});

// rankingDB 에서 데이터를 찾아온다.
// company 를 기본으로 받으며, type의 경우 movie, tvSeries, all 타입으로 구분하여 가져온다.
router.get("/__read", async (req, res) => {
  const company = req.query.company;
  const type = req.query.type;
  const result = await __read(company, type);
  res.send(result);
});

// rankingDB의 데이터를 업데이트를 한다.
// 사실 임시용, 사용이 되지 않음
// 정확한 데이터 형식으로 업데이트를 해야 업데이트가 정상적으로 잘됨
router.put("/__update", async (req, res) => {
  const [jsonData] = req.body;
  await __update(jsonData);
  res.send(200);
});

// rankingDB의 데이터를 삭제한다.
// 삭제할 rankingDB의 _id 값을 사용하여 삭제한다.
router.delete("/__delete", async (req, res) => {
  const idArray = req.query.idArray;
  await __delete(idArray);
  res.send(200);
});

// rankingDB에 데이터를 하나를 추가를 한다.
router.post("/DBCreate", async (req, res) => {
  const [jsonData] = req.body;
  await DBCreate(jsonData);
  res.send(200);
});

// rankingDB 데이터를 정확하게 하나 검색하여 온다.
// title, year, ott(string)를 입력을 정확하게 해야한다.
router.get("/DBRead", async (req, res) => {
  const title = req.query.title;
  const year = req.query.year;
  const ott = req.query.ott;
  const result = await DBRead(title, year, ott);
  res.send(result);
});

// rankingDB 데이터를 업데이트한다.
// 사실상 임시용, 사용이 되지 않는다.
// 정확한 데이터를 전부 입력해야함.
// 데이터가 잘못될 수 있음
router.put("/DBUpdate", async (req, res) => {
  const [jsonData] = req.body;
  await DBUpdate(jsonData);
  res.send(200);
});

// rankingDB 데이터를 삭제한다.
// 정확한 rankingDB의 _id 값을 입력해야한다.
router.delete("/DBDelete", async (req, res) => {
  const _id = req.query.id;
  await DBDelete(_id);
  res.send(200);
});

// rankingDB를 전부 json 파일로 출력한다.
router.post("/DBOutputJson", async (_, res) => {
  await DBOutputJson();
  res.send(200);
});

export default router;
