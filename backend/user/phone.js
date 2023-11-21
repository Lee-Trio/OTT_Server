import dotenv from "dotenv";
dotenv.config();
import coolsms from "coolsms-node-sdk";
const mySMS = coolsms.default;

export const checkPhone = (userPhone) => {
  // error 부터 알아내는 것이 좋을 경우도 잇다
  if (userPhone.length < 10 || 11 < userPhone.length) {
    // 1-1. 잘못 입력을 했으면 다시 해달라고 하기ㅏ
    return "핸드폰 번호를 제대로 입력해 주세요"; //early exit
  } else {
    return true;
  }
};

export const getToken = () => {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
};

export const sendTokenToSMS = async (userPhone, token) => {
  const messageService = new mySMS(
    process.env.MY_COOLSMS_API_KEY,
    process.env.MY_COOLSMS_SECRET_API_KEY
  );
  const result = await messageService
    .sendOne({
      to: userPhone,
      from: process.env.PHONENUMBER,
      text: `인증 번호 : ${token}`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
