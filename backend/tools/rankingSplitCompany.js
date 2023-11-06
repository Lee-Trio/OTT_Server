import isNull from "./isNull.js";
import { dataSelect } from "./data_select.js";

export const rankingSplitCompany = (company, type) => {
  const data = dataSelect("ranking", type);
  console.log(data);
  const object = new Array();

  for (let i = 0; i < data.length; i++) {
    if (data[i].ott.toLowerCase() === company.toLowerCase()) {
      object.push(data[i]);
    }
  }
  if (isNull(object)) {
    return "noData exit:data_split.js > data_split";
  } else {
    return object;
  }
};
