import { add } from './Add'

export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal);
}