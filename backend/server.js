import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import { tempData } from "./temp_data.js";
const swaggerSpec = swaggerJsdoc(options);
const app = express();
app.use(express.json()); // 과거에는 bodyParser 사용
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// use == post , get
app.get("/Ping", (req, res) => {
  res.send("Pong");
});

app.get("/allDataList", (req, res) => {
  const result = tempData;
  res.send(result);
});

app.get("/oneData", (req, res) => {
  const dataNumber = req.query.dataNumber;
  const result = tempData[dataNumber];

  res.send(result);
});

app.listen(3000); // 기다린다는 말
