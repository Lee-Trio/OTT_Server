// DB import
import mongoose from "mongoose";
import { rankingSchema } from "./DBDataType.js";
import { __readOneString } from "../toolsDB/DBmain.js";

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

// DBmain import
import { DBCreate as DBmainCreate, DBRead as DBmainRead } from "./DBmain.js";

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
  if (!data) return "Not Found Data";
  const rankNumber = data.rank;
  const ottString = data.ott;
  // data.ottString = data.ott;
  // data.ott = StringToOTTNumber(data.ott);
  // data.ott = ChangeInputOTTNumber(data.ott);
  try {
    const findOne = await rankingModel.findOne({
      title: data.title,
      year: data.year,
      ottString: data.ott,
    });
    await DBmainCreate(data);
    if (!findOne) {
      const contentData = await DBmainRead(data.title, data.year);
      let result;
      if (contentData !== "Not Found DB") {
        result = { ...contentData._doc };
        delete result._id;
      } else {
        result = { ...data };
        result.ott = ChangeInputOTTNumber(StringToOTTNumber(data.ott));
      }
      result.ottString = ottString;
      result.rank = rankNumber;
      const InputContent = new rankingModel(result);
      await InputContent.save();

      return getSec() + " : new Save : " + data.title;
    } else {
      return getSec() + " : includes : " + findOne.title + " : " + findOne._id;
    }
  } catch (err) {
    throw err;
  }
};

export const DBRead = async (title, year, ott) => {
  try {
    const result = await rankingModel.findOne(
      {
        title,
        year,
        ottString: ott,
      },
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );

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
      ottString: data.ott,
    });

    if (!result) {
      return "Not Found DB";
    } else {
      await result.deleteOne();
    }
    await DBCreate(data);
    return getSec() + " : Update : " + result.title;
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
  if (!data) return "Not Found Data";
  try {
    await rankingModel.deleteMany();
    console.log(getSec() + " : " + "Ranking Data Delete");
  } catch (err) {
    throw err;
  }
  for (let i = 0; i < data.length; i++) {
    // console.log("DBCreate > " + data[i]);
    console.log("DBCreate > " + data[i].title, data[i].ott, data[i].rank);
    const result = await DBCreate(data[i]);
    // console.log(result);
  }
  return getSec() + " : done";
};

export const __read = async (company, type) => {
  try {
    let results;
    // const data = await __readOneString(str);
    //           // console.log(data);
    //           arr.push(data);
    if (!type)
      results = await rankingModel.find(
        {
          ottString: company,
        },
        { createdAt: 0, updatedAt: 0, __v: 0 }
      );
    else
      results = await rankingModel.find(
        {
          ottString: company,
          mt: type,
        },
        { createdAt: 0, updatedAt: 0, __v: 0 }
      );

    if (!results) {
      return "Not Found DB";
    }

    let arr = [];

    for (let i = 0; i < results.length; i++) {
      const str = results[i].title;

      const data = await __readOneString(str);
      if (data[0] && "title" in data[0]) {
        // console.log(data[0]["title"]);
        data[0].rank = results.rank;
      } else {
        // console.error("data[0] or 'title' is undefined or null");
        data[0] = results[i];
      }
      arr.push(data[0]);
    }
    return arr;
    // return results;
  } catch (err) {
    throw err;
  }
};

export const __update = async (dataArray) => {
  for (let i = 0; i < dataArray.length; i++) {
    const result = await DBUpdate(dataArray[i]);
    console.log(getSec() + " : " + result + " : " + dataArray[i].title);
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
