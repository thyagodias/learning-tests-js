import Cart from './Cart';
import Product from './Product';
import User from './User';

const makeSut = () => {
  const user = new User('Teste', '123');
  return new Cart(user);
};

describe('Cart', () => {
  describe('Preço total', () => {
    it('o preço total deve retornar 0 quando o carrinho estiver vazio', () => {
      const sut = makeSut();

      expect(sut.getTotalPrice()).toBe(0);
    });

    it('ao adicionar o primeiro produto de quantidade 1 deve retornar o preço total com o valor do produto', () => {
      const sut = makeSut();

      const product = new Product('Produto teste', 100);
      sut.addProduct(product, 1);

      expect(sut.getTotalPrice()).toBe(100);
    });

    it('ao adicionar um produto com quantidade 2 deve retornar o preço total com o valor do produto x quantidade', () => {
      const sut = makeSut();

      const product = new Product('Produto teste', 100);
      sut.addProduct(product, 2);

      expect(sut.getTotalPrice()).toBe(200);
    });

    it('ao adicionar dois produtos com quantidade 2 deve retornar o preço total com o valor dos produtos x quantidade de cada um', () => {
      const sut = makeSut();

      const firtProduct = new Product('Produto teste', 100);
      const secondProduct = new Product('Produto teste 2', 200);
      sut.addProduct(firtProduct, 2);
      sut.addProduct(secondProduct, 2);

      expect(sut.getTotalPrice()).toBe(600);
    });
  });

  describe('Adicionar items', () => {
    it('deve adicionar um item na primeira posição com o carrinho vazio', () => {
      const sut = makeSut();

      const product = new Product('Produto teste', 100);
      sut.addProduct(product, 1);

      const mockCartItem = { product, amount: 1 };
      expect(sut.items[0]).toEqual(mockCartItem);
    });

    it('deve adicionar um item na última posição com o carrinho contendo um item', () => {
      const sut = makeSut();

      const firstProduct = new Product('First product', 100);
      const lastProduct = new Product('Last Product', 200);
      sut.addProduct(firstProduct, 1);
      sut.addProduct(lastProduct, 2);

      const mockCartItem = { product: lastProduct, amount: 2 };
      expect(sut.items.pop()).toEqual(mockCartItem);
    });

    it('deve incrementar a quantidade do item ao adicionar um produto já existente no carrinho', () => {
      const sut = makeSut();

      const product = new Product('First product', 100);
      sut.addProduct(product, 1);
      sut.addProduct(product, 2);

      expect(sut.items.length).toBe(1);
      expect(sut.items[0].amount).toBe(3);
    });
  });

  describe('Remover item', () => {
    it('deve remover um item do carrinho pelo nome', () => {
      const sut = makeSut();

      const product = new Product('Product', 100);
      sut.addProduct(product, 1);
      sut.removeItem('Product');

      expect(sut.items.length).toBe(0);
    });

    it('deve retornar um erro ao tentar remover um produto que não existe', () => {
      const sut = makeSut();
      expect(() => sut.removeItem('Product')).toThrowError('Product not found');
    });
  });

  describe('Total de produtos', () => {
    it('deve retornar 0 ao verificar total de produtos do carrinho', () => {
      const sut = makeSut();

      expect(sut.getAmountOfProducts()).toBe(0);
    });

    it('ao inserir dois produtos com quantidade 150 e 50 deve retornar 200 ao verificar a quantidade total de produtos', () => {
      const sut = makeSut();

      const firstProduct = new Product('First product', 100);
      const secondProduct = new Product('Second product', 100);
      sut.addProduct(firstProduct, 150);
      sut.addProduct(secondProduct, 50);

      expect(sut.getAmountOfProducts()).toBe(200);
    });
  });
});
