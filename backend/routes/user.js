import express from "express";

const router = express.Router();

app.post("/tokens/phone/", (req, res) => {
  const userPhone = req.body.userPhoneNumber;
  // 1. 휴대폰 번호 자릿수 맞는지 확인하기 (10`11자리)
  // is~ true or false 값을 줄것이라 예상을 하게됨
  // 이러한 방식으로 이름을 짖느것이 좋음
  const isValid = checkPhone(userPhone);
  if (isValid === false) return 1;
  // 2. 핸드폰 토큰 6자리 만들기
  const token = getToken();
  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(userPhone, token);

  res.send("인증완료!!!");
});

app.post("/users", (req, res) => {
  const { name, age, school, email } = req.body;
  // 1. 이메일 검증
  const isValid = checkEmail(email);
  if (isValid === false) return false;
  // 1-1. 이메일이 틀리면 다시 하기
  // 2. 가입 환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({
    name,
    age,
    school,
    email,
  });
  // 3. 이메일에 탬플릿 전송하기 => 일단 콘솔로 찍ㄱ
  sendTemplateToEmail(email, myTemplate);
  res.send("전송완료");
});

export default router;
