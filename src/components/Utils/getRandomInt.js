let getRandomInt = (min = 0, max = 50) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default getRandomInt;