import Item from '../contracts/Item'
import Product from './Product'
import User from './User'

export default class Cart {
  readonly items: Item[]
  user: User

  constructor(user: User) {
    this.user = user
    this.items = []
  }

  addProduct (product: Product, amount: number): void {
    const indexOfProduct = this.items.findIndex(item => item.product.name === product.name)

    if (indexOfProduct !== -1) {
      this.items[indexOfProduct].amount += amount
      return
    }

    this.items.push({ product, amount })
  }

  removeProduct (): void {
    //
  }

  getItems (): Item[] {
    return this.items
  }

  getTotalPrice (): number {
    let price = 0
    price = this.items.reduce((totalPrice, item) => totalPrice + item.amount * item.product.price, 0)

    return price
  }

  getAmountOfItems (): number {
    let amountOfItems = 0

    amountOfItems = this.items.reduce((amount, item) => amount + item.amount, 0)
    return amountOfItems
  }

}
