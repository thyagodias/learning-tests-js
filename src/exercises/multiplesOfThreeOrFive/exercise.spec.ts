import { sumMultiples3and5, sumMultiple3or5and7, sumMultiples3or5 } from './exercise'

describe('Exercise: Multiples of Three or/and Five', () => {
  it('deve retornar o valor da soma de todos os números múltiplos de 3 E 5 abaixo de 1000', () => {
    expect(sumMultiples3and5()).toBe(33165)
  })

  it('deve retornar o valor da soma de todos os números múltiplos de 3 OU 5 abaixo de 1000', () => {
    expect(sumMultiples3or5()).toBe(233168)
  })

  it('deve retornar o valor da soma de todos os números múltiplos de (3 OU 5) e 7 abaixo de 1000', () => {
    expect(sumMultiple3or5and7()).toBe(33173)
  })
})
