export const StringToOTTNumber = (str) => {
  switch (str.toLowerCase()) {
    case "disney Plus":
      return 1;
    case "watcha":
      return 2;
    case "tving":
      return 4;
    case "netflix":
      return 8;
  }
};

export const ChangeInputOTTNumber = (str) => {
  switch (str) {
    case 1:
      return 1;
    case 2:
      return 20;
    case 4:
      return 400;
    case 8:
      return 8000;
  }
};

export const insideNumber = (num1, num2) => {
  for (let i = 0; i < 4; num1 /= 10, i++) {
    if (num1 % 10 === num2) {
      return true;
    }
  }
  return false;
};
