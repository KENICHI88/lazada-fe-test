export const randomBetween2Number = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min) + min);
}
