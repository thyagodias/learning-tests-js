import { checkIfIsMultiples, calculateMultipleBaseOnRuleFunction } from './multiples'
describe('Multiples', () => {
  describe('Verifica se é multiplo', () => {
    it('deve retorna true se 9 for multiplo de 3', () => {
      expect(checkIfIsMultiples(9, 3)).toBe(true)
    })

    it('deve retorna false se 3 for multiplo de 5', () => {
      expect(checkIfIsMultiples(3, 5)).toBe(false)
    })

    it('a soma dos multiplos de 3 ou 5 até 10 deve ser 23', () => {
      const rule = (num): boolean => {
        return checkIfIsMultiples(num, 3) || checkIfIsMultiples(num, 5)
      }

      const sum = calculateMultipleBaseOnRuleFunction(10, rule)
      expect(sum).toBe(23)
    })
  })
})
