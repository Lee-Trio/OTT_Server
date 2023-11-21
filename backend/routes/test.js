import express from "express";
const router = express.Router();

router.get("/Ping", (req, res) => {
  res.send("Pong");
});

router.get("/", (req, res) => {
  const result = req.body;
  res.send(result);
});

export default router;
