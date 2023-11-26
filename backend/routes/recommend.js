import express, { json } from "express";
// recommend import
import { contentRecommend } from "../recommendData/get_recommend_wishlist.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  const result = await contentRecommend(data);
  res.send(result);
});

export default router;
