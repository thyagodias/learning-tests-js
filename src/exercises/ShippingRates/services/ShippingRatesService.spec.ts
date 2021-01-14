import ShippingRatesService from "../services/ShippingRatesService";
import Cart from "../models/Cart";
import User from "../models/User";
import CorreiosService from "../services/CorreiosService";



const makeSut = () => {
  const getCorreiosShippingRates = CorreiosService.prototype.getCorreiosShippingRates = jest.fn()
  // TODO fazer essa implementação ser uma HOF, para o caso de teste definir um retorno pro método
  getCorreiosShippingRates.mockImplementationOnce(() => 0)
  const mockedCorreiosService = new CorreiosService()

  const user = new User('Teste', '123')
  const cart = new Cart(user)

  const shippingRatesService = new ShippingRatesService(mockedCorreiosService)

  return {
    user, cart, mockedCorreiosService, shippingRatesService
  }
}

describe('Shipping Rates Service', () => {

  describe('Chamadas para o serviço externo de cálculo de frete', () => {
    it('o serviço externo do correios deve ser chamado quando o total do carrinho for 99', () => {
      const sut = makeSut()
      sut.shippingRatesService.calculateShippingRates(sut.cart)
      expect(sut.mockedCorreiosService.getCorreiosShippingRates).toHaveBeenCalled();
    });

    it('o serviço externo do correios NÃO deve ser chamado quando o total do carrinho for 100', () => {
      const sut = makeSut()
      // mockar o retorno do total do carrinho

      sut.shippingRatesService.calculateShippingRates(sut.cart)
      expect(sut.mockedCorreiosService.getCorreiosShippingRates).not.toHaveBeenCalled();
    });
  });

  describe('Valores de envio', () => {
    it('o valor do frete deve ser 0 para ', () => {
      const sut = makeSut()
      const totalShippingRates = sut.shippingRatesService.calculateShippingRates(sut.cart)
      expect(sut.mockedCorreiosService.getCorreiosShippingRates).toHaveBeenCalled();
    });

    it('o valor de frete deve ser 0 se o carrinho estiver vazio', () => {
      const sut = makeSut()
      expect(sut.mockedCorreiosService.getCorreiosShippingRates(sut.cart.user.zipCode)).toBe(0)
    });
  });

});

it('deve retornar 20 ao somar o total do carrinho com um produto de custo 15 e outro 5', () => {

});

it('deve requisitar o serviço externo dos correios para o cálculo do valor de frete para o valor total do carrinho igual a $ 100', () => {

});

it('deve retornar o valor total do carrinho com o frete', () => {

});

it('deve retornar o valor total do carrinho com o frete', () => {

});

it('deve chamar o serviço externo do correios quando o valor total for 99', () => {

});