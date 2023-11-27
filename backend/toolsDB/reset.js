import { dataSelect } from "../toolsJson/dataSelect.js";
import { __create, allDrop } from "./DBmain.js";

const data = dataSelect("all");
await allDrop();
const result = await __create(data);
console.log(result);
