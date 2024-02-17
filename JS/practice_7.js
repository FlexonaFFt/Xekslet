const smallestDivisor = (num) => {
  if (num <= 1) {
    return 1;
  }

  findSmallestDivisor = (n, divisor = 2) => {
    if (n % divisor === 0) {
      return divisor;
    }

    if (divisor > Math.sqrt(n)) {
      return n;
    }

    return findSmallestDivisor(n, divisor + 1);
  }

  return findSmallestDivisor(num);
};