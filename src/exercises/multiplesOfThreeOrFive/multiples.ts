import { removeDuplicateValuesInArray } from '../../helpers/arrayHelper'

class Multiples {
  caculatesAllMultiplesUpToLimitValue (multiples: number[], maxValue: number): number[] {
    const valuesMultiples = []
    for (let i = 1; i < maxValue; i++) {
      multiples.forEach(multiple => {
        if (this.checkIfIsMultiples(i, multiple)) valuesMultiples.push(i)
      })
    }
    return removeDuplicateValuesInArray(valuesMultiples)
  }

  checkIfIsMultiples (valor: number, multiplo: number): boolean {
    return valor % multiplo === 0
  }
}

export default Multiples
