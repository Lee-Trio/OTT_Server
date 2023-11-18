export const textFilter = (inputText) => {
  // 초성 => 12593~12622
  // 중성 => 12623~12643
  // 종성 => 12593~12622

  const result = [];
  const text = inputText.replace(/ /g, "").split("");
  for (let i = 0; i < text.length; i++) {
    if (!(12593 <= text[i].charCodeAt(0) && text[i].charCodeAt(0) <= 12643)) {
      result.push(text[i]);
    }
  }
  return result.join("");
};
