const { spawn } = require("child_process");

// Python 스크립트 경로
const pythonScript = "./set_key_datas.py";

// Python 스크립트 실행
const pythonProcess = spawn("python", [pythonScript]);

// Python 스크립트의 표준 출력 이벤트 처리
pythonProcess.stdout.on("data", (data) => {
  console.log(`Python script output: ${data.toString()}`);
});

// Python 스크립트의 표준 오류 이벤트 처리
pythonProcess.stderr.on("data", (data) => {
  console.error(`Python script error: ${data.toString()}`);
});

// Python 스크립트의 종료 이벤트 처리
pythonProcess.on("close", (code) => {
  console.log(`Python script exited with code ${code}`);
});
