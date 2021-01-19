import { checkIfIsMultiples, calculateMultipleBaseOnRuleFunction } from './multiples';

const rules = {
  multiple3And5: (value: number): boolean => checkIfIsMultiples(value, 3) && checkIfIsMultiples(value, 5),
  multiple3or5: (value: number): boolean => checkIfIsMultiples(value, 3) || checkIfIsMultiples(value, 5),
  multiple3or5and7: (value: number): boolean => rules.multiple3or5(value) && checkIfIsMultiples(value, 7),
};

export const sumMultiples3and5 = (): number => {
  const sum = calculateMultipleBaseOnRuleFunction(1000, rules.multiple3And5);
  return sum;
};

export const sumMultiples3or5 = (): number => {
  const sum = calculateMultipleBaseOnRuleFunction(1000, rules.multiple3or5);
  return sum;
};

export const sumMultiple3or5and7 = (): number => {
  const sum = calculateMultipleBaseOnRuleFunction(1000, rules.multiple3or5and7);
  return sum;
};
