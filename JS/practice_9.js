reverse = (string) => {
    let result = '';
    let i = string.length - 1;
  
    while (i >= 0) {
      result = result + string[i];
      i--;
    }
  
    return result
  }