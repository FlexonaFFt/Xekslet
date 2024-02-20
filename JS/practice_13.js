// @ts-check

// BEGIN (write your solution here)
const square = (n) => {
    return n ** 2;
  };
  
  const sumOfSquares = (f, s) => {
    return (f ** 2) + (s ** 2);
  };
  
  function squareSumOfSquares(b, d) {
    const squb = b ** 2;
    const squd = d ** 2;
    return squb ** 2 + 2 * squb * squd + squd ** 2;
  };
  // END
  
  export {
    square,
    sumOfSquares,
    squareSumOfSquares,
  };