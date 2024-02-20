function sumOfDigits(num) {
    if (num < 10) {
      return num;
    }
    let result = 0;
    while (num > 0) {
      result += num % 10; // Находит последнюю цифру числа 
      num = Math.floor(num / 10);
    }
    return sumOfDigits(result);
  };
  
  export default function addDigits(num) {
    return sumOfDigits(num);
  };