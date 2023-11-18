export const StringToOTTNumber = (str) => {
  switch (str) {
    case "Disney Plus":
      return 1;
    case "Watcha":
      return 2;
    case "TVING":
      return 4;
    case "Netflix":
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
