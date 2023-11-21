// DB import
import mongoose from "mongoose";
import { AllDataSchema } from "./DBDataType.js";

// securities import
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.CONTENTDB;

// tools import
import {
  StringToOTTNumber,
  ChangeInputOTTNumber,
  insideNumber,
} from "../tools/ottNumber.js";
import { textFilter } from "../tools/textFilter.js";
import { getSec } from "../tools/getDate.js";
import { allDataCreate } from "../toolsJson/dataInput.js";
import { dataBackup } from "../toolsJson/dataBackup.js";
import { dataSelect } from "../toolsJson/dataSelect.js";

// search limit
const LIMIT = 20;

// CONNECT TO MONGODB SERVER => contentDB
const contentDB = mongoose.createConnection(URI);
contentDB.once("open", () => {
  console.log("Connected to contentDB");
});
contentDB.on("error", (err) => {
  console.log(`Error in contentDB connection: ${err}`);
});

// schema and model define
const AllDataModel = contentDB.model("AllDataModel", AllDataSchema);

// DISCONNECT TO MONGODB SERVER => contentDB
const end = async () => {
  contentDB.close();
};

// data create
const DBCreate = async (data) => {
  data.ott = await StringToOTTNumber(data.ott);
  data.searchTitle = textFilter(data.title);
  try {
    const findOne = await AllDataModel.findOne({
      title: data.title,
      year: data.year,
    });

    if (!findOne) {
      data.ott = await ChangeInputOTTNumber(data.ott);
      const InputContent = new AllDataModel(data);
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
      findOne.href.push(data.href);
      if (!findOne.img.includes(data.img)) findOne.img.push(data.img);
      findOne.ott += ChangeInputOTTNumber(data.ott);
      if (findOne.description.length < data.description.length)
        findOne.description = data.description;
      await findOne.save();
      return "Add : " + findOne.title;
    }
  } catch (err) {
    throw err;
  }
};

export const DBRead = async (title, year) => {
  try {
    const findOne = await AllDataModel.findOne({
      title,
      year,
    });

    if (!findOne) {
      return "Not Found DB";
    }
    return findOne;
  } catch (err) {
    throw err;
  }
};

const DBUpdate = async (data) => {
  try {
    const UpdateContent = await AllDataModel.findOne({
      title: data.title,
      year: data.year,
    });

    if (!UpdateContent) {
      return "Not Found DB";
    }
    UpdateContent.href = data.href;
    UpdateContent.img = data.img;
    UpdateContent.ott = data.ott;
    UpdateContent.mt = data.mt;
    UpdateContent.description = data.description;
    UpdateContent.genre = data.genre;
    UpdateContent.director = data.director;
    UpdateContent.cast = data.cast;
    UpdateContent.running_time = data.running_time;
    UpdateContent.film_rating = data.film_rating;
    UpdateContent.season = data.season;
    await UpdateContent.save();
    return getSec() + "updated : " + UpdateContent.title;
  } catch (err) {
    throw err;
  }
};

const DBDelete = async (data) => {
  try {
    await AllDataModel.deleteOne({ title: data.title, year: data.year });
  } catch (err) {
    throw err;
  }
};

export const __readID = async (searchID) => {
  try {
    const results = await AllDataModel.find(
      { _id: searchID },
      { createdAt: 0, updatedAt: 0, __v: 0 } // 프로젝션 객체
    );
    if (!results) {
      return "Not Found Data";
    }
    return results;
  } catch (err) {
    throw err;
  }
};

export const DBOutputJson = async () => {
  try {
    const results = await AllDataModel.find();
    await allDataCreate(results);
    await dataBackup();
    return results;
  } catch (err) {
    throw err;
  }
};

export const __create = async (contents) => {
  for (let i = 0; i < contents.length; i++) {
    const result = await DBCreate(contents[i]);
    console.log(result);
  }
  return 200;
};

export const __update = async (contents) => {
  for (let i = 0; i < contents.length; i++) {
    const result = await DBUpdate(contents[i]);
    console.log(result);
  }
  return 200;
};

export const __delete = async (contents) => {
  for (let i = 0; i < contents.length; i++) {
    const reuslt = await DBDelete(contents[i]);
    console.log(result);
  }
  return 200;
};

export const __readString = async (searchString) => {
  const str = textFilter(searchString);
  let regex = new RegExp(`^${str}`, "i");
  try {
    let results = await AllDataModel.find(
      { searchTitle: regex },
      { searchTitle: 0, createdAt: 0, updatedAt: 0, __v: 0 } // 프로젝션 객체
    ).limit(LIMIT);
    if (!results) {
      return "Not Found Data";
    } else if (results.length <= 20) {
      regex = new RegExp(str, "i");
      const addNumber = LIMIT - results.length;
      results.push(
        await AllDataModel.find(
          { searchTitle: regex },
          { searchTitle: 0, createdAt: 0, updatedAt: 0, __v: 0 } // 프로젝션 객체
        ).limit(addNumber)
      );
    }
    return results;
  } catch (err) {
    throw err;
  }
};
