import { getToday } from "../tools/getDate.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const checkEmail = (email) => {
  // 1.이메일 형태인가 ?
  // ex) aaa@email.net
  //email 이 안비어있는가?
  if (email === undefined || email === "" || email.includes("@") === false) {
    console.error("long email");
    return false;
  }

  // 이메일은 2개 부분
  // userid 와 email 주소로 나눠짐
  const [userId, emailAddress] = email.split("@");
  if (!userId || userId.length < 8) {
    return "userId to short or isNull";
  }

  // email address 형태도 가추고 있는 지 확인
  if (!emailAddress.includes(".")) {
    return "long email";
  }

  // 옳은 이메일 형태
  return true;
};

export const getWelcomeTemplate = ({ userID, userEmail }) => {
  const createdAt = getToday();
  const myTemplate = `
        <html>
            <body>
                <h1>${userID}님 가입을 환영합니다!!!</h1>
                <hr>
                <div>아이디: ${userID}</div>
                <div>이메일: ${userEmail}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>`;

  return myTemplate;
};

export const getTokenTemplate = ({ email, token }) => {
  const myTemplate = `
        <html>
            <body>
                <h1>${email}님</h1>
                <hr>
                <h3>가입하기 위해 인증 번호를 입력해주세요.</h3>
                <div>인증 번호: ${token}</div>
            </body>
        </html>`;

  return myTemplate;
};

export const sendTemplateToEmail = async ({ userEmail, myTemplate }) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_GOOGLE_PASSWORD,
    },
  });

  const res = await transport.sendMail({
    from: process.env.MY_EMAIL,
    to: userEmail,
    subject: "Today OTT 가입을 환영합니다.",
    html: myTemplate,
  });
};
