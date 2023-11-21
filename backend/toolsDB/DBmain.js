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
// import { dataSelect } from "../toolsJson/dataSelect.js";

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
const DBCreate = async (data) => {
  data.ott = await StringToOTTNumber(data.ott);
  data.searchTitle = textFilter(data.title);
  try {
    const findOne = await AllDataModel.findOne({
      title: data.title,
      year: data.year,
    });

    if (findOne.ott === 0) {
      console.error("data error");
      return "data error";
    }
    if (!findOne) {
      data.ott = await ChangeInputOTTNumber(data.ott);
      const InputContent = new AllDataModel(data);
      await InputContent.save();
      return "new Save : " + InputContent.title;
    } else {
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
  const regex1 = new RegExp(`^${str}`, "i");
  try {
    const Array1 = await AllDataModel.find(
      { searchTitle: regex1 },
      { searchTitle: 0, createdAt: 0, updatedAt: 0, __v: 0 } // 프로젝션 객체
    ).limit(LIMIT);
    if (!Array1) {
      return "Not Found Data";
    }
    if (Array1.length === LIMIT) return Array1;
    const regex2 = new RegExp(`${str}`, "i");
    const addNumber = LIMIT - Array1.length;
    const Array2 = await AllDataModel.find(
      { searchTitle: regex2 },
      { searchTitle: 0, createdAt: 0, updatedAt: 0, __v: 0 } // 프로젝션 객체
    ).limit(addNumber);

    // Array에서 _id와 함께 모든 속성을 포함하는 배열 생성
    const set1 = Array1.map((item) => ({ ...item.toObject() }));
    const set2 = Array2.map((item) => ({ ...item.toObject() }));

    const combinedArray = [...set1, ...set2];

    // acc 현재까지 누적된 배열
    // current 배열의 현재 요소
    const results = combinedArray.reduce((acc, current) => {
      // 중복을 찾기 위해 현재 요소의 _id 값과 동일한 요소가 이미 누적 배열에 있는지 확인
      const x = acc.find((item) => item._id === current._id);

      if (!x) {
        // 중복이 없는 경우 현재 요소를 누적 배열에 추가
        return acc.concat([current]);
      } else {
        // 중복이 있는 경우 누적 배열을 그대로 유지
        return acc;
      }
    }, []);

    return results;
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
