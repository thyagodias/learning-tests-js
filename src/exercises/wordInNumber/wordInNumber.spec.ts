import { convertWordToNumbers } from './wordInNumber'

describe('Word in Number', () => {
  it('deve retornar o número 0 ao converter o caractere _', () => {
    expect(convertWordToNumbers('_')).toBe(0)
  })
  it('deve retornar o número 1 ao converter a letra a', () => {
    expect(convertWordToNumbers('a')).toBe(1)
  })
  it('deve retornar o número 13 ao converter a letra m', () => {
    expect(convertWordToNumbers('m')).toBe(13)
  })
  it('deve retornar o número 26 ao converter a letra z', () => {
    expect(convertWordToNumbers('z')).toBe(26)
  })
  it('deve retornar o número 27 ao converter a letra A', () => {
    expect(convertWordToNumbers('A')).toBe(27)
  })
  it('deve retornar o número 39 ao converter a letra N', () => {
    expect(convertWordToNumbers('N')).toBe(40)
  })
  it('deve retornar o número 52 ao converter a letra Z', () => {
    expect(convertWordToNumbers('Z')).toBe(52)
  })
})
