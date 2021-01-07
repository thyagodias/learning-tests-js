const sumValuesFromArray = (values: number[]): number => {
  return values.reduce((accumulator, currentValue) => accumulator + currentValue)
}

const removeDuplicateValuesInArray = (list: number[]): number[] => {
  list = [...new Set(list)]
  return list
}

export { sumValuesFromArray, removeDuplicateValuesInArray }
