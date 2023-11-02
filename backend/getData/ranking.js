import isNull from "../tools/isNull.js";

import { data_split } from "../tools/data_split.js";

export const ranking_Data = (company, type) => {
  const object = data_split(company, type);
  if (isNull(object)) {
    return "isNull exit:ranking_Data";
  } else {
    return object;
  }
};
