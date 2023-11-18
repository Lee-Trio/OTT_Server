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
  //   console.log(data);
  data.ott = await StringToOTTNumber(data.ott);
  try {
    const findOne = await AllDataModel.findOne({
      title: data.title,
      year: data.year,
    });

    if (!findOne) {
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
        result.description = data.description;
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

export const DBFinderString = async (searchString) => {
  const str = textFilter(searchString);
  const regex = new RegExp("릭", "i");
  try {
    const results = await AllDataModel.find(
      { title: regex },
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

export const DBFinderID = async (searchID) => {
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
    DBCreate(contents[i]);
  }
  return 200;
};

export const __update = async (contents) => {
  for (let i = 0; i < contents.length; i++) {
    DBUpdate(contents[i]);
  }
  return 200;
};

export const __delete = async (contents) => {
  for (let i = 0; i < contents.length; i++) {
    DBDelete(contents[i]);
  }
  return 200;
};

// console.log(await DBFinderString("릭"));