// DB import
import mongoose from "mongoose";
import { userTempSchema, userSchema } from "./DBDataType.js";

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
