import Cart from "../models/Cart"
import CorreiosShippingService from '../contracts/CorreiosShippingService'

export default class ShippingRatesService {

  correiosShippingService: CorreiosShippingService

  constructor(correiosShippingService: CorreiosShippingService) {
    this.correiosShippingService = correiosShippingService
  }

  calculateShippingRates = (cart: Cart) => {
    let shippingRate = 0

    if (cart.items.length === 0) throw new Error("Cart is empty");

    if (cart.getTotalPrice() < 100) {
      shippingRate = shippingRate +
        this.correiosShippingService.getCorreiosShippingRates(cart.user.zipCode)
    }

    return shippingRate
  }
}