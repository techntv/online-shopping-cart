import * as types from '../actions/actionsTypes'
const initialState = {
  isFetching: false,
  page: 1,
  pageSize: 10,
  total: 0,
  items: [],
  error: null
} as any

function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, isFetching: true };
    case types.FETCH_RECEIVE_PRODUCTS:
      return { ...state, items: action.data, isFetching: false };
    case types.FETCH_ERROR_PRODUCTS:
      return { ...state, error: action.error, isFetching: false }
  }
  return state;
}

export default productReducer;