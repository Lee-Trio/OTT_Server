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
const LIMIT = process.env.LIMIT;

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
export const DBCreate = async (data) => {
  if (data.ottString) delete data.ottString;
  if (data.rank) delete data.rank;
  data.ott = StringToOTTNumber(data.ott);
  if (data.ott === "error") return "error";
  data.searchTitle = textFilter(data.title);
  try {
    if (data.title.includes("[판매종료]")) return "[판매종료]";
    const findOne = await AllDataModel.findOne({
      searchTitle: data.searchTitle,
      year: data.year,
    });
    if (!findOne) {
      data.ott = ChangeInputOTTNumber(data.ott);
      const InputContent = new AllDataModel(data);
      await InputContent.save();
      return getSec() + " new Save : " + InputContent.title;
    } else {
      console.log(insideNumber(Number(findOne.ott), Number(data.ott)));
      if (insideNumber(Number(findOne.ott), Number(data.ott))) {
        return getSec() + " includes : " + data.title;
      }
      findOne.href.push(data.href);
      if (!findOne.img.includes(data.img)) findOne.img.push(data.img);
      findOne.ott += ChangeInputOTTNumber(data.ott);
      if (findOne.description.length < data.description.length)
        findOne.description = data.description;
      await findOne.save();
      return getSec() + " Add : " + findOne.title;
    }
  } catch (err) {
    throw err;
  }
};

export const DBRead = async (title, year) => {
  try {
    const findOne = await AllDataModel.findOne(
      {
        title,
        year,
      },
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );

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
    const result = await DBDelete(contents[i]);
    console.log(result);
  }
  return 200;
};

export const __readString = async (searchString) => {
  const str = textFilter(searchString);
  const regex1 = new RegExp(`^${str}`, "i");
  const regex2 = new RegExp(`${str}`, "i");

  try {
    const Array1 = await AllDataModel.find(
      { searchTitle: regex1 },
      { searchTitle: 0, createdAt: 0, updatedAt: 0, __v: 0 } // 프로젝션 객체
    ).limit(LIMIT);
    if (Array1.length === Number(LIMIT)) return Array1;

    const addNumber = LIMIT - Array1.length;
    const Array2 = await AllDataModel.find(
      { searchTitle: regex2 },
      { searchTitle: 0, createdAt: 0, updatedAt: 0, __v: 0 } // 프로젝션 객체
    ).limit(addNumber);

    const combinedArray = [...Array1, ...Array2].reduce((acc, current) => {
      const isDuplicate = acc.some(
        (item) => item._id.toString() === current._id.toString()
      );

      if (!isDuplicate) {
        acc.push(current);
      }

      return acc;
    }, []);

    return combinedArray;
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

export const DBAllRead = async () => {
  try {
    const result = await AllDataModel.find();
    if (!result) {
      return "Not Found DB";
    }
    return result;
  } catch (err) {
    throw err;
  }
};

export const DBAddKey = async (data) => {
  try {
    const UpdateContent = await AllDataModel.findOne({
      title: data.title,
      year: data.year,
    });

    if (!UpdateContent) {
      return "Not Found DB";
    }
    UpdateContent.key = data.key;
    UpdateContent.soup = data.soup;
    await UpdateContent.save();
    return getSec() + "updated : " + UpdateContent.title;
  } catch (err) {
    throw err;
  }
};

export const allDrop = async () => {
  try {
    await AllDataModel.deleteMany({});
  } catch (err) {
    throw err;
  }
};

// ranking data => content data check
// const result = async () => {
//   const data = dataSelect("ranking", "all");
//   const array = [];
//   for (let i = 0; i < data.length; i++)
//     array.push(await DBRead(data[i].title, data[i].year));
//   return array;
// };
// console.log(await result());
