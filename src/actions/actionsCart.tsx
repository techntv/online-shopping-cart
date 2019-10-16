import * as types from './actionsTypes';
import { IProductDetail } from "../models/product"

export function addToCart(product: IProductDetail) {
  return {
    type: types.ADD_TO_CART,
    product
  }
}