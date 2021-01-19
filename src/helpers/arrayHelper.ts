const sumValuesFromArray = (values: number[]): number => (
  values.reduce((accumulator, currentValue) => accumulator + currentValue)
);

const removeDuplicateValuesInArray = (list: number[]): number[] => [...new Set(list)];

export { sumValuesFromArray, removeDuplicateValuesInArray };
