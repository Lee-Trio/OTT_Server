// db에서 데이터를 받아와서 set_key_datas.py로 넘겨주는 역할
// 환경변수로 데이터 넘겨주면서 하고싶었는데 너무 크다고 안된다해서 파일로 만듦

import { DBReadAll } from "../toolsDB/DBmain.js";
import fs from "fs";

const DBData = await DBReadAll();
console.log("get DB all data");

function saveJSONToFile(data, filename) {
  const jsonData = JSON.stringify(data, null, 2); // null, 2는 들여쓰기를 추가하여 가독성을 높임
  fs.writeFileSync(filename || "data.json", jsonData);
}

const file_root = "./datas";
const file_path = file_root + "/db_all_data.json";

saveJSONToFile(DBData, file_path);
