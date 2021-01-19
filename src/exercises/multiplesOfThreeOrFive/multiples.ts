export const calculateMultipleBaseOnRuleFunction = (maxValue: number, rule: Function): number => {
  let counter = 0;

  for (let i = 1; i < maxValue; i++) {
    if (rule(i)) {
      counter += i;
    }
  }

  return counter;
};

export const checkIfIsMultiples = (valor: number, multiplo: number): boolean => valor % multiplo === 0;
