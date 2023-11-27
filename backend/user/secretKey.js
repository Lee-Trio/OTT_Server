import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

// 무작위 바이트를 생성하여 비밀키를 만듭니다.
const secretKey = crypto.randomBytes(keyLength);

// Buffer를 Hex 문자열로 변환하여 출력합니다.
const secretKeyHex = secretKey.toString("hex");

console.log("생성된 비밀키:", secretKeyHex);
