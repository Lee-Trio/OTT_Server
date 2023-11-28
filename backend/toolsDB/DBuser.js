// DB import
import mongoose from "mongoose";
import {
  userTempSchema,
  userSchema,
  userFavoriteSchema,
  userGoodSchema,
  userSeeSchema,
} from "./DBDataType.js";

// securities import
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.USERDB;

// CONNECT TO MONGODB SERVER => rankingDB
const userDB = mongoose.createConnection(URI);
userDB.once("open", () => {
  console.log("Connected to userDB");
});
userDB.on("error", (err) => {
  console.log(`Error in userDB connection: ${err}`);
});

// schema and model define
const tempModel = userDB.model("tempModel", userTempSchema);
const userModel = userDB.model("userModel", userSchema);
const favoriteModel = userDB.model("favoriteModel", userFavoriteSchema);
const goodModel = userDB.model("goodModel", userGoodSchema);
const seeModel = userDB.model("seeModel", userSeeSchema);

// data create
export const TokenCreate = async (user, token) => {
  try {
    const findOne = await tempModel.findOne({ userID: user, token });

    if (!findOne) {
      const InputUserTemp = new tempModel({
        userID: user,
        token,
      });
      await InputUserTemp.save();
      return "temp Input";
    } else {
      return "already Input";
    }
  } catch (err) {
    throw err;
  }
};

export const TokenDelete = async (user, token) => {
  const number = Number(token);
  try {
    const result = await tempModel.findOne({ userID: user, token: number });
    if (!result) {
      await tempModel.deleteOne({ userID: user });
      return false;
    } else {
      await tempModel.deleteOne({ userID: user, token: number });
      return true;
    }
  } catch (err) {
    throw err;
  }
};

export const userCreate = async ({ userID, userPW, userEmail, userPhone }) => {
  try {
    const findOne = await userModel.findOne({ userID });

    if (!findOne) {
      const InputUser = new userModel({
        userID,
        userPW,
        userEmail,
        userPhone,
      });
      await InputUser.save();
      return "Register";
    } else {
      return "already user";
    }
  } catch (err) {
    throw err;
  }
};

export const userFind = async ({ userID, userPW }) => {
  try {
    const findOne = await userModel.findOne({ userID });

    if (!findOne) {
      return "Not Found";
    }
    return findOne;
  } catch (err) {
    throw err;
  }
};

export const getFavorite = async ({ userID }) => {
  try {
    const results = await favoriteModel.find(
      { userID },
      { userID, createdAt, updatedAt }
    );
    if (!results) {
      return "Not Found";
    }
    return results;
  } catch (err) {
    throw err;
  }
};

export const getGood = async ({ userID }) => {
  try {
    const results = await goodModel.find(
      { userID },
      { userID, createdAt, updatedAt }
    );
    if (!results) {
      return "Not Found";
    }
    return results;
  } catch (err) {
    throw err;
  }
};

export const getSee = async ({ userID }) => {
  try {
    const results = await seeModel.find(
      { userID },
      { userID, createdAt, updatedAt }
    );
    if (!results) {
      return "Not Found";
    }
    return results;
  } catch (err) {
    throw err;
  }
};

export const addFavorite = async ({ userID, data }) => {
  try {
    const results = await favoriteModel.find({ userID });
    console.log(results);
    if (!results.length === 0) {
      const InputData = new favoriteModel({
        userID,
        contentIDs: [data],
      });
      console.log("InputData before save:", InputData); // 디버깅용 로그 추가

      await InputData.save();
      console.log("InputData after save:", InputData); // 디버깅용 로그 추가
      return "add";
    }
    // results.contentsID.push(data);
    // results.save();
    return results;
  } catch (err) {
    throw err;
  }
};

export const addGood = async ({ userID, data }) => {
  try {
    const results = await goodModel.find({ userID });
    if (!results) {
      const InputUser = new goodModel({
        userID,
        contentIDs: data,
      });
      await InputUser.save();
      return "add";
    }
    results.contentsID.push(data);
    results.save();
    return results;
  } catch (err) {
    throw err;
  }
};

export const addSee = async ({ userID, data }) => {
  try {
    const results = await seeModel.find({ userID });
    if (!results) {
      const InputUser = new seeModel({
        userID,
        contentIDs: data,
      });
      await InputUser.save();
      return "add";
    }
    results.contentsID.push(data);
    results.save();
    return results;
  } catch (err) {
    throw err;
  }
};

export const removeFavorite = async ({ userID, data }) => {
  try {
    const results = await favoriteModel.find({ userID, contentsID: data });
    if (!results) {
      return "Not Found";
    }
    await favoriteModel.deleteOne({ userID, contentsID: data });
    return "remove";
  } catch (err) {
    throw err;
  }
};

export const removeGood = async ({ userID, data }) => {
  try {
    const results = await goodModel.find({ userID, contentsID: data });
    if (!results) {
      return "Not Found";
    }
    await goodModel.deleteOne({ userID, contentsID: data });
    return "remove";
  } catch (err) {
    throw err;
  }
};

export const removeSee = async ({ userID, data }) => {
  try {
    const results = await seeModel.find({ userID, contentsID: data });
    if (!results) {
      return "Not Found";
    }
    await seeModel.deleteOne({ userID, contentsID: data });
    return "remove";
  } catch (err) {
    throw err;
  }
};
