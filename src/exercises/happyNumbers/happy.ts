export const calculatesSumOfSquaresOfDigits = (num: number): number => {
  const splitNumber = num.toString().split('');
  const digits = splitNumber.map((number) => parseInt(number, 10));

  let sum = 0;

  digits.forEach((digit) => {
    sum += digit ** 2;
  });

  return sum;
};

export const checksHappyNumber = (num: number): boolean => {
  if (num < 1 || num % 1 !== 0) return false;
  const numbersCovered = [];

  while (num !== 1) {
    const sumOfSquaresOfDigits = calculatesSumOfSquaresOfDigits(num);

    if (numbersCovered.includes(sumOfSquaresOfDigits)) return false;

    numbersCovered.push(sumOfSquaresOfDigits);
    num = sumOfSquaresOfDigits;
  }

  return true;
};
