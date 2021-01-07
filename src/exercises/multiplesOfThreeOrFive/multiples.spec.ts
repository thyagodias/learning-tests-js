import Multiples from './multiples'
describe('Multiples of Three or/and Five', () => {
  describe('Verifica se é multiplo', () => {
    it('deve retorna todos os números de 1 a 10 que são multiplos de 3', () => {
      const multiples = new Multiples()
      expect(multiples.caculatesAllMultiplesUpToLimitValue([3], 10)).toEqual([3, 6, 9])
    })

    it('deve retorna true se 9 for multiplo de 3', () => {
      const multiples = new Multiples()
      expect(multiples.checkIfIsMultiples(9, 3)).toBe(true)
    })

    it('deve retorna false se 3 for multiplo de 5', () => {
      const multiples = new Multiples()
      expect(multiples.checkIfIsMultiples(3, 5)).toBe(false)
    })

    it('deve retornar os múltiplos de 3 e 5 até 10', () => {
      const multiples = new Multiples()
      expect(multiples.caculatesAllMultiplesUpToLimitValue([3, 5], 10)).toEqual([3, 5, 6, 9])
    })
  })
})
