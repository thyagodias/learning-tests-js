export default interface CorreiosShippingService {
  getCorreiosShippingRates (zipCode: string): number
}