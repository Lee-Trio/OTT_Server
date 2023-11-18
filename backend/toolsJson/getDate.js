export const getToday = () => {
  const date = new Date();
  // getMonth 에 에러가 있음 고쳐지면 1빼기
  let result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return result;
};

export const getTime = () => {
  const date = new Date();
  let result = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}.${date.getHours()}:${date.getMinutes()}`;
  return result;
};

export const getSec = () => {
  const date = new Date();
  let result = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}.${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return result;
};
