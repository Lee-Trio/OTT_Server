export const StringToOTTNumber = (str) => {
  const type = typeof str;
  if (type === "string") {
    switch (str.toLowerCase()) {
      case "disney plus":
        return 1;
      case "watcha":
        return 2;
      case "tving":
        return 4;
      case "netflix":
        return 8;
    }
  } else if (type === "number") {
    for (; str > 10; str /= 10);
    if (Math.floor(str % 10)) return Math.floor(str);
  } else {
    return "type error";
  }
  return "error";
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
  return str;
};

export const insideNumber = (num1, num2) => {
  let number = num1;
  for (let i = 0; i < 4; number /= 10, i++) {
    if (Math.floor(number % 10) === num2) {
      return true;
    }
  }
  return false;
};
