export const getToken = () => {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  return result;
};
