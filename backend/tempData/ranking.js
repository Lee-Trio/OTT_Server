import isNull from "../toolsJson/isNull.js";

import { rankingSplitCompany } from "../toolsJson/rankingSplitCompany.js";

export const ranking_Data = (company, type) => {
  const object = rankingSplitCompany(company, type);
  if (isNull(object)) {
    return "isNull exit:ranking_Data";
  } else {
    return object;
  }
};
