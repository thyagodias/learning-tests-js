import User from './User';

describe('User class', () => {
  it('um usuário deve possuir cep', () => {
    const user = new User('test name', 'zipCodeTest');
    expect(user).toBeInstanceOf(User);
    expect(user.zipCode).toBe('zipCodeTest');
  });

  it('um usuário deve possuir cep', () => {
    const user = new User('test name', 'zipCodeTest');
    expect(user).toBeInstanceOf(User);
    expect(user.zipCode).toBe('zipCodeTest');
  });
});
