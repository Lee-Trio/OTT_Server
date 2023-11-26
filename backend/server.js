// essentials list
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;

// swagger list
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

// router list
import searchRouter from "./routes/search.js";
import rankingRouter from "./routes/ranking.js";
import checkRouter from "./routes/check.js";
import testRouter from "./routes/test.js";
import tempRouter from "./routes/temp.js";
import dataInputRouter from "./routes/dataInput.js";
import DBMainRouter from "./routes/DBmain.js";
import DBRankRouter from "./routes/DBrank.js";
import RecommendRouter from "./routes/recommend.js";

// default setting
const app = express();
app.use(express.json()); // 과거에는 bodyParser 사용
app.use(cors());

const swaggerSpec = swaggerJsdoc(options);
// use == post , get
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/search", searchRouter);
app.use("/ranking", rankingRouter);
app.use("/check", checkRouter);
app.use("/test", testRouter);
app.use("/temp", tempRouter);
app.use("/dataInput", dataInputRouter);
app.use("/DBmain", DBMainRouter);
app.use("/DBrank", DBRankRouter);
app.use("/recommend", RecommendRouter);

app.listen(PORT, () => {
  console.log("Start Today Ott Server...");
});
