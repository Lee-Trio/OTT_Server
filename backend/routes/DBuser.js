import express, { json } from "express";
import { getToken } from "../tools/getToken.js";
import {
  getTokenTemplate as getTokenTemplateEmail,
  getWelcomeTemplate as getWelcomeTemplateEmail,
  checkEmail,
  sendTemplateToEmail,
} from "../user/email.js";
import {
  getTokenTemplate as getTokenTemplateSMS,
  getWelcomeTemplate as getWelcomeTemplateSMS,
  checkPhone,
  sendTokenToSMS,
} from "../user/phone.js";
import {
  TokenCreate,
  TokenDelete,
  userCreate,
  userFind,
  getFavorite,
  getGood,
  getSee,
  addFavorite,
  addGood,
  addSee,
  removeFavorite,
  removeGood,
  removeSee,
} from "../toolsDB/DBuser.js";
import bcrypt from "bcrypt";

// securities import
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

//   1. email or phone 을 입력을 받는다.
//   2. email or phone 을 맞는지 확인을 한다.
//   3. 맞다면 token 생성을 한다.
//   4. send token을 한다.
//   5. 해당 토큰을 email or phone이랑 같이 DB에 저장을 한다.
//   6. 나중에 인증 /auth가 오면 확인 후 [인증] 을 보낸다.
//   7. 이후 모든 데이터를 받아서 userDB에 데이터를 저장을 한다.

router.post("/userRegister", async (req, res) => {
  const { userID, userPW, userEmail, userPhone } = req.body;
  const hashedPW = await bcrypt.hash(userPW, 10);
  if (!userID || !userPW) res.send("ID or PW entered incorrectly");
  if (userEmail ^ userPhone) res.send("Email or Phone entered incorrectly");
  const result = await userCreate({
    userID,
    userPW: hashedPW,
    userEmail,
    userPhone,
  });
  if (!userPhone) {
    const myTemplate = getWelcomeTemplateEmail({ userID, userEmail });
    sendTemplateToEmail({ userEmail, myTemplate });
  } else {
    const myTemplate = getWelcomeTemplateSMS({ userID, userPhone });
    sendTokenToSMS({ userPhone, myTemplate });
  }
  res.send(result);
});

router.post("/login", async (req, res) => {
  const { userID, userPW } = req.query;
  const user = await userFind({ userID });

  if (user && (await bcrypt.compare(userPW, user.userPW))) {
    req.session.userID = user._id;
    res.send("Login successful!");
  } else {
    res.send("Invalid username or password.");
  }
});

router.get("/logincheck", async (req, res) => {
  const user = req.session.userID;
  console.log(req.session.userID);
  res.send(user);
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.send("logout successful");
  });
});

router.post("/userAuth", async (req, res) => {
  const { userEmail, userPhone, number } = req.body;
  if (!number) {
    if (!userEmail) userAuthPhone(userPhone);
    else if (!userPhone) userAuthEmail(userEmail);
    else res.send("entered incorrectly");
    res.send(200);
  } else {
    let isTrue;
    if (!userEmail) isTrue = await AuthCheck(userPhone, number);
    else if (!userPhone) isTrue = await AuthCheck(userEmail, number);
    else res.send("entered incorrectly");

    if (isTrue) res.send("인증완료");
    else res.send("인증실패");
  }
});

router.get("/favorite", (req, res) => {
  const user = req.session.userID;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = getFavorite({ userID: user });
  res.send(result);
});

router.post("/favorite/add", (req, res) => {
  // 등록
  const user = req.session.userID;
  const data = req.body;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = addFavorite({ userID: user, data });
  return res.send(result);
});

router.get("/favorite/remove", (req, res) => {
  // 제거
  const user = req.session.userID;
  const data = req.body;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = removeFavorite({ userID: user, data });
  res.send(result);
});

router.get("/good", (req, res) => {
  const user = req.session.userID;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = getGood({ userID: user });
  res.send(result);
});

router.post("/good/add", (req, res) => {
  const user = req.session.userID;
  const data = req.body;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = addGood({ userID: user, data });
  res.send(result);
});

router.post("/good/remove", (req, res) => {
  const user = req.session.userID;
  const data = req.body;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = removeGood({ userID: user, data });
  res.send(result);
});

router.get("/see", (req, res) => {
  const user = req.session.userID;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = getSee({ userID: user });
  res.send(result);
});

router.post("/see/add", (req, res) => {
  const user = req.session.userID;
  const data = req.body;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = addSee({ userID: user, data });
  res.send(result);
});

router.post("/see/remove", (req, res) => {
  const user = req.session.userID;
  const data = req.body;
  if (!user) {
    res.send("You are not logged in");
  }
  const result = removeSee({ userID: user, data });
  res.send(result);
});

const AuthCheck = async (user, number) => {
  const result = await TokenDelete(user, number);
  if (result) return true;
  return false;
};

const userAuthEmail = (email) => {
  // 1. 이메일 검증
  const isValid = checkEmail(email);
  if (isValid === false) return "Email error";
  // 1-1. 이메일이 틀리면 다시 하기
  //   2. 인증번호 발송
  const token = getToken();
  const myTemplate = getTokenTemplateEmail({ email, token });
  // 3. 이메일에 탬플릿 전송하기 => 일단 콘솔로 찍ㄱ
  // 4. DB에 인증번호 저장
  TokenCreate(email, token);
  sendTemplateToEmail({ email, myTemplate });
  console.log("email 인증번호 발송");
};

const userAuthPhone = (phone) => {
  // 1. 휴대폰 번호 자릿수 맞는지 확인하기 (10`11자리)
  // is~ true or false 값을 줄것이라 예상을 하게됨
  // 이러한 방식으로 이름을 짖느것이 좋음
  const isValid = checkPhone(phone);
  if (isValid === false) return "Phone error";
  // 2. 핸드폰 토큰 6자리 만들기
  const token = getToken();
  const myTemplate = getTokenTemplateSMS(token);
  // 3. DB에 인증번호 저장
  TokenCreate(phone, token);
  // 4. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS({ phone, myTemplate });
  console.log("phone 인증번호 발송");
};

export default router;
