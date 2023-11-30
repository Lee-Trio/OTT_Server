import { DBAddKey } from "../toolsDB/DBmain.js";
import fs from "fs";

const file_root = "./datas";
const file_path = file_root + "/add_soup_data.json";

console.log("실 행");
fs.readFile(file_path, "utf8", (err, data) => {
  if (err) {
    console.error("파일을 읽는 도중 오류 발생:", err);
    return;
  }
  const jsonData = JSON.parse(data);
  for (let i = 0; i < jsonData.length; i++) {
    DBAddKey(jsonData[i]);
  }
});
