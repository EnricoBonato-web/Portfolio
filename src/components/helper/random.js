export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomPercent(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)+'%';
}