import { checksHappyNumber, calculatesSumOfSquaresOfDigits } from './happy';

describe('Números felizes', () => {
  it('deve retornar false verificar se um número não inteiro é feliz', () => {
    expect(checksHappyNumber(1.5)).toBe(false);
  });

  it('deve retornar false verificar se um número não positivo é feliz', () => {
    expect(checksHappyNumber(-1)).toBe(false);
  });

  it('deve retornar true ao verificar se 7 é um número feliz', () => {
    expect(checksHappyNumber(7)).toBe(true);
  });

  it('deve retornar false ao verificar se 4 é um número feliz', () => {
    expect(checksHappyNumber(4)).toBe(false);
  });
});

describe('Soma dos quadrados', () => {
  it('a soma dos quadrados de 7 deve ser 49', () => {
    expect(calculatesSumOfSquaresOfDigits(7)).toBe(49);
  });

  it('a soma dos quadrados dos dígitos 97 deve ser 130', () => {
    expect(calculatesSumOfSquaresOfDigits(97)).toBe(130);
  });

  it('a soma dos quadrados de 10 deve ser 1', () => {
    expect(calculatesSumOfSquaresOfDigits(10)).toBe(1);
  });
});
