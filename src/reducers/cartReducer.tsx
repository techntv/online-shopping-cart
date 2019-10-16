import * as types from '../actions/actionsTypes'
const initialState = [] as any

function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      let updatedCart;
      let { product } = action;
      let existProduct = state.find((item: any) => {
        return item.id === product.id;
      });
      if (!existProduct) {
        updatedCart = [
          ...state,
          {
            quantity: 1,
            ...product
          }
        ]
      } else {
        updatedCart = state.map((item: any) => {
          if (item.id === existProduct.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }

          return item;
        })
      }

      return [...updatedCart]
    }
    default:
      return state;
  }
}

export default cartReducer;