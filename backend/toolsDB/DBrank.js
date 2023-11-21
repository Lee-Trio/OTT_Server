// DB import
import mongoose from "mongoose";
import { rankingSchema } from "./DBDataType.js";

// securities import
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.RANKINGDB;

// tools import
import { StringToOTTNumber, ChangeInputOTTNumber } from "../tools/ottNumber.js";
import { getSec } from "../tools/getDate.js";
import { rankDataCreate } from "../toolsJson/dataInput.js";
import { dataBackup } from "../toolsJson/dataBackup.js";
import { dataSelect } from "../toolsJson/dataSelect.js";

// search limit
const LIMIT = process.env.LIMIT;

// CONNECT TO MONGODB SERVER => rankingDB
const rankingDB = mongoose.createConnection(URI);
rankingDB.once("open", () => {
  console.log("Connected to rankingDB");
});
rankingDB.on("error", (err) => {
  console.log(`Error in rankingDB connection: ${err}`);
});

// schema and model define
const rankingModel = rankingDB.model("rankingModel", rankingSchema);

// DISCONNECT TO MONGODB SERVER => contentDB
const end = async () => {
  rankingDB.close();
};

// data create
export const DBCreate = async (data) => {
  data.ottString = data.ott;
  data.ott = StringToOTTNumber(data.ott);
  try {
    const findOne = await rankingModel.findOne({
      title: data.title,
      year: data.year,
      ott: data.ott,
    });

    if (!findOne) {
      const InputContent = new rankingModel(data);
      await InputContent.save();
      return "new Save : " + InputContent.title;
    } else {
      return "includes : " + findOne.title + " : " + findOne._id;
    }
  } catch (err) {
    throw err;
  }
};

export const DBRead = async (title, year, ott) => {
  try {
    const result = await rankingModel.findOne({
      title,
      year,
      ottString: ott,
    });

    if (!result) {
      return "Not Found DB";
    }
    return result;
  } catch (err) {
    throw err;
  }
};

export const DBUpdate = async (data) => {
  try {
    const result = await rankingModel.findOne({
      title: data.title,
      year: data.year,
      ott: data.ott,
    });

    if (!result) {
      return "Not Found DB";
    }
    result = data;
    return result;
  } catch (err) {
    throw err;
  }
};

export const DBDelete = async (_id) => {
  try {
    const result = await rankingModel.findOne({ _id });
    if (!result) {
      return "Not Found DB";
    }
    result.deleteOne({ _id });
  } catch (err) {
    throw err;
  }
};

export const __create = async (data) => {
  for (let i = 0; i < data.length; i++) {
    const result = await DBCreate(data[i]);
    console.log(getSec() + " : " + result);
  }
};

export const __read = async (company, type) => {
  try {
    let results;
    if (!type)
      results = await rankingModel.find({
        ott: company,
      });
    else
      results = await rankingModel.find({
        ott: company,
        mt: type,
      });

    if (!results) {
      return "Not Found DB";
    }
    return results;
  } catch (err) {
    throw err;
  }
};

export const __update = async (dataArray) => {
  for (let i = 0; i < dataArray.length; i++) {
    const result = await DBUpdate(dataArray[i]);
    console.log(getSec() + " : " + result);
  }
};

export const __delete = async (idArray) => {
  for (let i = 0; i < idArray.length; i++) {
    const result = await DBDelete(idArray[i]);
    console.log(getSec() + " : " + result);
  }
};

export const DBOutputJson = async () => {
  try {
    const results = await rankingModel.find();
    await rankDataCreate(results);
    await dataBackup();
    return results;
  } catch (err) {
    throw err;
  }
};
