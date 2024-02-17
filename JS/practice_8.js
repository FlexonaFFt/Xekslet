const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    let del = 2;
  
    if (num < 1) {
      return NaN;
    } else if (num === 1) {
      return 1;
    }
    
    while (num % del !== 0 && del < num) {
      del += 1;
    }
  
    if (num % del === 0) {
      return del;
    }
    // END
  };