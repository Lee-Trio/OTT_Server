import { DBReadAll, __readString } from "../toolsDB/DBmain.js";
import { textFilter } from "../tools/textFilter.js";

// const result = await DBReadAll();
const str = textFilter(" 비공식 작전 ");
const result = await __readString(str);
console.log(str);
console.log(result[0]);
