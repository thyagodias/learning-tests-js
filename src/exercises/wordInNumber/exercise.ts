import { convertWordToNumbers } from './wordInNumber'
import { checkNumberIsPrime } from './primeNumbers'
import { checksHappyNumber } from '../happyNumbers/happy'
import { checkIfIsMultiples } from '../multiplesOfThreeOrFive/multiples'

interface exerciseResponse {
  isPrime: boolean
  isHappy: boolean
  isMultiple3or5: boolean
}

const exercise = (word: string): exerciseResponse => {
  const resultWordInNumber = convertWordToNumbers(word)
  const isHappy = checksHappyNumber(resultWordInNumber)
  const isPrime = checkNumberIsPrime(resultWordInNumber)
  const isMultiple3or5 = checkIfIsMultiples(resultWordInNumber, 3) || checkIfIsMultiples(resultWordInNumber, 5)

  return {
    isPrime,
    isHappy,
    isMultiple3or5
  }
}

export default exercise
