// essentials list
import express, { json } from "express";
import cors from "cors";

// swagger list
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

// router list
import searchRouter from "./routes/search.js";
import rankingRouter from "./routes/ranking.js";
import testRouter from "./routes/test.js";
import tempRouter from "./routes/temp.js";

// port number
const port = 3000;

// default setting
const app = express();
app.use(express.json()); // 과거에는 bodyParser 사용
app.use(cors());

const swaggerSpec = swaggerJsdoc(options);
// use == post , get
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/search", searchRouter);
app.use("/ranking", rankingRouter);
app.use("/test", testRouter);
app.use("/temp", tempRouter);

app.listen(port, () => {
  console.log("Start Today Ott Server...");
}); // 기다린다는 말
