// @ts-check

// import { length, toUpperCase } from './strings.js'; 

// BEGIN (write your solution here)
function toUpperProgramm(sentence) {
  const words = sentence.split(' ');
  const UpperWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return UpperWords.join(' ');
};

export default toUpperProgramm;
// END