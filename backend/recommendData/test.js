import { spawn } from "child_process";

// 예제 데이터
const plainTextData = JSON.stringify([
  {
    title: "사악한 쾌락: 킬러들의 험담",
    href: "https://watcha.com/contents/m5ek2aK",
    img: "https://images.justwatch.com/poster/253749752/s166/saaghan-kwaerag",
    ott: "Watcha",
    mt: "movie",
    description:
      "호러 잡지에서 비평가로 활동하던 조엘은 연쇄 살인범들을 위한 비밀 지하 조직의 덫에 빠진다. 다음 희생자가 되지 않으려면 조직의 일원이 되어야 한다는 말에 어쩔 수 없이 조직에 들어간다.",
    genre: "코미디",
    director: "코디 칼라한",
    cast: "에반 마쉬, 앰버 골드파브, 아리 밀런",
    year: "2020",
    film_rating: "15",
    duration: "1시간 41분",
    season: "",
    key: "호러 잡지 비평가 조엘 덫 일원",
    soup: "호러 잡지 비평가 조엘 덫 일원 에반 마쉬, 앰버 골드파브, 아리 밀런 코디 칼라한 코미디",
  },
]);
console.log(plainTextData);
const pythonScript = "test.py";

// Python 스크립트 실행
const pythonProcess = spawn("python3", [pythonScript], {
  stdio: ["pipe", "pipe", process.stderr], // 표준 입력/출력/에러 설정
});

// Python 스크립트에 데이터 전송
pythonProcess.stdin.write(plainTextData);
pythonProcess.stdin.end();

let result = "";

// Python 스크립트의 표준 출력 이벤트 처리
pythonProcess.stdout.on("data", (data) => {
  result += data.toString();
});

// Python 스크립트의 종료 이벤트 처리를 다루기 위해 프로미스 반환
const pythonPromise = new Promise((resolve, reject) => {
  pythonProcess.on("close", (code) => {
    if (code === 0) {
      resolve(result);
    } else {
      reject(`Python 스크립트가 코드 ${code}로 종료되었습니다.`);
    }
  });
});

// Python 스크립트 실행이 완료된 후 결과 처리
pythonPromise
  .then((result) => {
    console.log("Python 스크립트 실행 결과:", result);

    // 여기서 추가적인 JavaScript 로직을 수행할 수 있습니다.
  })
  .catch((error) => {
    console.error("Python 스크립트 실행 중 에러:", error);
  });
