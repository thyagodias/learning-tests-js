import CorreiosShippingService from '../contracts/CorreiosShippingService';
import Cart from '../models/Cart';

export default class ShippingRatesService {
  correiosShippingService: CorreiosShippingService;

  constructor(correiosShippingService: CorreiosShippingService) {
    this.correiosShippingService = correiosShippingService;
  }

  calculateShippingRates = (cart: Cart): number => {
    let shippingRate = 0;

    if (cart.items.length === 0) throw new Error('Cart is empty');

    if (cart.getTotalPrice() < 100) {
      shippingRate
        += this.correiosShippingService.getCorreiosShippingRates(cart.user.zipCode);
    }

    return shippingRate;
  };
}
