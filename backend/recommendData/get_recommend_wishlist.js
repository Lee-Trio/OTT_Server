import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const pythonScript = "./get_recommend_wishlist.py"; // 실제 경로로 수정
const dfPath = "./datas/add_key_data.json"; // 실제 경로로 수정
const df2Path = "./datas/wishlist.json"; // 실제 경로로 수정

// add_key_data.json 파일 내용 읽기
const dfContent = fs.readFileSync(dfPath, "utf8");

// wishlist.json 파일 내용 읽기
const df2Content = fs.readFileSync(df2Path, "utf8");

// 매개변수를 파일에 저장
const tempDir = "./temp"; // 적절한 임시 디렉토리 경로로 수정
fs.writeFileSync(path.join(tempDir, "df.json"), dfContent, "utf8");
fs.writeFileSync(path.join(tempDir, "df2.json"), df2Content, "utf8");

// Python 스크립트 실행
const pythonProcess = spawn("python", [
  pythonScript,
  path.join(tempDir, "df.json"),
  path.join(tempDir, "df2.json"),
]);

let result = "";

// Python 스크립트의 표준 출력 이벤트 처리
pythonProcess.stdout.on("data", (data) => {
  result += data.toString();
});

// Python 스크립트의 표준 오류 이벤트 처리
pythonProcess.stderr.on("data", (data) => {
  console.error(`Python 스크립트 오류: ${data.toString().trim()}`);
});

// Python 스크립트의 종료 이벤트 처리
pythonProcess.on("close", (code) => {
  if (code === 0) {
    // Python 스크립트 실행이 성공하면 결과를 JSON으로 파싱하여 사용
    const jsonResult = JSON.parse(result.trim());
    console.log(`Python script output: ${jsonResult}`);
  } else {
    console.error(`Python 스크립트가 코드 ${code}로 종료되었습니다.`);
  }
});
