import * as types from '../actions/actionsTypes'
const initialState = {
  data: {},
  isFetching: false,
  error: []
} as any

function productDetailReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_PRODUCT_DETAIL:
      return { ...state, isFetching: true };
    case types.FETCH_RECEIVE_PRODUCTDETAIL:
      return { ...state, data: action.data, isFetching: false };
    case types.FETCH_ERROR_PRODUCTDETAIL:
      return { ...state, error: action.error, isFetching: false }
  }
  return state;
}


export default productDetailReducer;