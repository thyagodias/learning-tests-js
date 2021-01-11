const convertWordToNumbers = (word: string): number => {
  const allowedLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  let sumOfWordNumbers = 0

  word.split('').forEach(letter => {
    const num = allowedLetters.findIndex(allowedLetter => letter === allowedLetter)
    const resultOfLetterInNumber = num + 1
    sumOfWordNumbers = sumOfWordNumbers + resultOfLetterInNumber
  })

  return sumOfWordNumbers
}

export { convertWordToNumbers }
