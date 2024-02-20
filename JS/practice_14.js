// @ts-check

// import { length, toUpperCase } from './strings.js'; need to uncommentable

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      counter ++;
    }
  }
  return counter;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (secondCount > firstCount) {
    return -1;
  } else {
    return 0;
  }
  // END
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);