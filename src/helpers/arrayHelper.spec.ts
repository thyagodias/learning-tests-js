import * as arrayHelper from './arrayHelper';

describe('Array Helper', () => {
  describe('Remove duplicated values of array', () => {
    it('deve remover os valores duplicados do array', () => {
      const arr = [1, 2, 3, 3, 4, 5, 1];
      expect(arrayHelper.removeDuplicateValuesInArray(arr)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('Soma valores de um array', () => {
    describe('Soma valores de um array', () => {
      it('deve retorna a soma de um array de números', () => {
        expect(arrayHelper.sumValuesFromArray([3, 5, 6, 9])).toBe(23);
      });
    });
  });
});
