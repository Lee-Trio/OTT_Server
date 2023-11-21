// DB import
import mongoose from "mongoose";
import { rankingSchema } from "./DBDataType.js";

// securities import
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.RANKINGDB;

// CONNECT TO MONGODB SERVER => rankingDB
const rankingDB = mongoose.createConnection(URI);
rankingDB.once("open", () => {
  console.log("Connected to contentDB");
});
rankingDB.on("error", (err) => {
  console.log(`Error in contentDB connection: ${err}`);
});

// schema and model define
const rankingModel = rankingDB.model("rankingModel", rankingSchema);

// DISCONNECT TO MONGODB SERVER => contentDB
const end = async () => {
  rankingDB.close();
};

// data create
const DBCreate = async (data) => {
  data.ott = await StringToOTTNumber(data.ott);
  try {
    const findOne = await AllDataModel.findOne({
      title: data.title,
      year: data.year,
    });

    if (!findOne) {
      data.ott = await ChangeInputOTTNumber(data.ott);
      const InputContent = new rankingModel(data);
      await InputContent.save();
      return "new Save : " + InputContent.title;
    } else {
      if (findOne.ott === 0) {
        console.error("data error");
        return "data error";
      }
      if (insideNumber(findOne.ott, data.ott)) {
        return "includes : " + data.title;
      }
      await findOne.save();
      return "Add : " + findOne.title;
    }
  } catch (err) {
    throw err;
  }
};

export const DBRead = async (company, type) => {
  try {
    const results = await rankingModel.find({});

    if (!findOne) {
      return "Not Found DB";
    }
    return findOne;
  } catch (err) {
    throw err;
  }
};
