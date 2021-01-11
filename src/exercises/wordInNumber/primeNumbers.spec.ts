import { checkNumberIsPrime } from './primeNumbers'

describe('Prime numbers', () => {
  it('deve retornar false ao verificar se 1 é um número primo', () => {
    expect(checkNumberIsPrime(1)).toBe(false)
  })
  it('deve retornar false ao verificar se 0 é um número primo', () => {
    expect(checkNumberIsPrime(0)).toBe(false)
  })
  it('deve retornar false ao verificar se -1 é um número primo', () => {
    expect(checkNumberIsPrime(-1)).toBe(false)
  })
  it('deve retornar true ao verificar se 2 é um número primo', () => {
    expect(checkNumberIsPrime(2)).toBe(true)
  })
  it('deve retornar false ao verificar se 10 é um número primo', () => {
    expect(checkNumberIsPrime(10)).toBe(false)
  })
  it('deve retornar true ao verificar se 199 é um número primo', () => {
    expect(checkNumberIsPrime(199)).toBe(true)
  })
  it('deve retornar true ao verificar se 3 é um número primo', () => {
    expect(checkNumberIsPrime(3)).toBe(true)
  })
  it('deve retornar true ao verificar se 7 é um número primo', () => {
    expect(checkNumberIsPrime(7)).toBe(true)
  })
  it('deve retornar false ao verificar se 200 é um número primo', () => {
    expect(checkNumberIsPrime(200)).toBe(false)
  })
})
