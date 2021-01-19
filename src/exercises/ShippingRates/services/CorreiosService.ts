import CorreiosShippingService from '../contracts/CorreiosShippingService';

export default class CorreiosService implements CorreiosShippingService {
  getCorreiosShippingRates(zipCode: string): number {
    return 0;
  }
}
