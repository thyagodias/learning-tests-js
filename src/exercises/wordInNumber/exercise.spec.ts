import exercise from './exercise';

describe('Exercise Word In Numbers', () => {
  it("para a letra 'a' deve retornar false para multipla de 3 ou 5", () => {
    expect(exercise('a').isMultiple3or5).toEqual(false);
  });

  it("para a palavra 'teste' deve retornar true para multipla de 3 ou 5", () => {
    expect(exercise('teste').isMultiple3or5).toEqual(true);
  });

  it("para a palavra '1Java.Script%' deve retornar true para multiplo de 3 ou 5, false para número primo e false para número feliz", () => {
    expect(exercise('1Java.Script%')).toEqual({ isPrime: false, isHappy: false, isMultiple3or5: true });
  });

  it("para a palavra '1Java.Script%' deve retornar true para multiplo de 3 ou 5", () => {
    expect(exercise('1Java.Script%').isMultiple3or5).toEqual(true);
  });

  it("para a palavra '1Java.Script%' deve retornar para número primo", () => {
    expect(exercise('1Java.Script%').isPrime).toEqual(false);
  });

  it("para a palavra '1Java.Script%' deve retornar false para número feliz", () => {
    expect(exercise('1Java.Script%').isHappy).toEqual(false);
  });
});
