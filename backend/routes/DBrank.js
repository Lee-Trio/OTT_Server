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

const router = express.Router();

router.post("/__create", async (req, res) => {
  const jsonData = req.body;
  await __create(jsonData);
  res.send(200);
});

router.get("/__read", async (req, res) => {
  const company = req.query.company;
  const type = req.query.type;
  const result = await __read(company, type);
  res.send(result);
});

router.put("/__update", async (req, res) => {
  const [jsonData] = req.body;
  await __update(jsonData);
  res.send(200);
});

router.delete("/__delete", async (req, res) => {
  const idArray = req.query.idArray;
  await __delete(idArray);
  res.send(200);
});

router.post("/DBCreate", async (req, res) => {
  const [jsonData] = req.body;
  await DBCreate(jsonData);
  res.send(200);
});

router.get("/DBRead", async (req, res) => {
  const title = req.query.title;
  const year = req.query.year;
  const ott = req.query.ott;
  const result = await DBRead(title, year, ott);
  res.send(result);
});
router.put("/DBUpdate", async (req, res) => {
  const [jsonData] = req.body;
  await DBUpdate(jsonData);
  res.send(200);
});
router.delete("/DBDelete", async (req, res) => {
  const _id = req.query.id;
  await DBDelete(_id);
  res.send(200);
});

router.post("/DBOutputJson", async (_, res) => {
  await DBOutputJson();
  res.send(200);
});

export default router;
