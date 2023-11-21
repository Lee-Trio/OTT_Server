import express, { json } from "express";
import {
  DBRead,
  __create,
  __delete,
  __update,
  __readID,
  __readString,
  DBOutputJson,
} from "../toolsDB/DBmain.js";

const router = express.Router();

router.post("/__create", async (req, res) => {
  const jsonData = req.body;
  await __create(jsonData);
  res.send(200);
});

router.get("/__read", async (req, res) => {
  const title = req.query.title;
  const year = req.query.year;
  const result = await DBRead(title, year);
  res.send(result);
});

router.put("/__update", async (req, res) => {
  const jsonData = req.body;
  await __update(jsonData);
  res.send(200);
});

router.delete("/__delete", async (req, res) => {
  const jsonData = req.body;
  await __delete(jsonData);
  res.send(200);
});

router.get("/DBFinder", async (req, res) => {
  const searchID = req.query.id;
  const searchString = req.query.string;
  let result;
  if (!searchID) result = await __readString(searchString);
  else result = await __readID(searchID);
  res.send(result);
});

router.post("/DBOutputJson", async (_, res) => {
  await DBOutputJson();
  res.send(200);
});

export default router;
