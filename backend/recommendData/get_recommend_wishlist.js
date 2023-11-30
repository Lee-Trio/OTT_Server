import { spawn } from "child_process";
import { __readString, __readOneString } from "../toolsDB/DBmain.js";
import { textFilter } from "../tools/textFilter.js";

export const contentRecommend = async (jsonData) => {
  try {
    const pythonScript = "./recommendData/get_recommend_wishlist.py"; // 실제 경로로 수정
    const df2Data = JSON.stringify(jsonData);

    // 환경 변수에 데이터 설정
    process.env.JSON_DATA = df2Data;

    // spawn 함수를 사용하여 Python 스크립트 실행
    const pythonProcess = spawn("python3", [pythonScript]);

    let result = [];

    // Python 스크립트의 표준 출력 이벤트 처리
    pythonProcess.stdout.on("data", (data) => {
      const jsonData = JSON.parse(data.toString());

      // 리스트 안에 또 다른 리스트가 있는 경우를 고려하여 평탄화
      result.push(...jsonData.flat(1));

      //   // parsedData가 배열이 아닌 경우 배열로 감싸주기
      //   const jsonDataArray = Array.isArray(jsonData) ? jsonData : [jsonData];
      //   // 리스트 안에 또 다른 리스트가 있는 경우를 고려하여 평탄화
      //   result.push(...jsonDataArray.flat(1));
      // });
    });

    // Python 스크립트의 표준 오류 이벤트 처리
    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python 스크립트 오류: ${data.toString().trim()}`);
    });

    // Python 스크립트의 종료 이벤트 처리를 다루기 위해 프로미스 반환
    return await new Promise((resolve, reject) => {
      pythonProcess.on("close", (code) => {
        if (code === 0) {
          // Python 스크립트가 성공적으로 실행되었다면 평탄화된 결과로 resolve

          let arr = [];
          let promiseChain = Promise.resolve(); // 초기 Promise를 만듦

          for (let i = 0; i < result.length; i++) {
            // console.log(result[i].title);
            const str = textFilter(result[i].title);

            // Promise 체인에 새로운 Promise를 추가
            promiseChain = promiseChain.then(async () => {
              const data = await __readOneString(str);
              // console.log(data);
              arr.push(data);
              // console.log(data[0]);
            });
          }

          // 모든 Promise가 완료된 후에 최종적으로 resolve
          promiseChain.then(() => {
            // console.log(arr);
            resolve(arr);
          });
        } else {
          console.error(`Python 스크립트가 코드 ${code}로 종료되었습니다.`);
          reject(`Python 스크립트가 코드 ${code}로 종료되었습니다.`);
        }
      });
    });
  } catch (error) {
    // console.error("Error parsing JSON:", error);
    console.error("Error:", error);
    reject(error); // 에러를 호출하는 코드로 전파
    // 에러 처리 로직
  }
};
