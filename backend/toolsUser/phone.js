import dotenv from "dotenv";
dotenv.config();
import coolsms from "coolsms-node-sdk";
import { getToken } from "../tools/getToken.js";
import { getToday } from "../tools/getDate.js";
const mySMS = coolsms.default;

export const checkPhone = (userPhone) => {
  // error 부터 알아내는 것이 좋을 경우도 잇다
  if (userPhone.length === 11) {
    // 1-1. 잘못 입력을 했으면 다시 해달라고 하기ㅏ
    return "핸드폰 번호를 제대로 입력해 주세요"; //early exit
  } else {
    return true;
  }
};

export const getTokenTemplate = (token) => {
  return `[Today OTT]
  인증 번호 : ${token}`;
};

export const getWelcomeTemplate = ({ userID, userPhone }) => {
  const createdAt = getToday();
  return `[Today OTT] ${userID}님의 회원가입을 환영합니다.
  가입한 핸드폰 아이디 : ${userPhone}
  가입한 날짜 : ${createdAt}`;
};

export const sendTokenToSMS = async ({ userPhone, myTemplate }) => {
  const messageService = new mySMS(
    process.env.MY_COOLSMS_API_KEY,
    process.env.MY_COOLSMS_SECRET_API_KEY
  );
  const result = await messageService
    .sendOne({
      to: userPhone,
      from: process.env.PHONENUMBER,
      text: myTemplate,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
