import * as types from './actionsTypes';

export function fetchProducts() {
  return (dispatch: any, getState: any) => {
    console.log('fetch Products middleware');
    dispatch({
      type: types.FETCH_PRODUCTS
    });
    fetch('http://localhost:8080/data.json')
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((json) => {
        // console.log('json', json.status);
        dispatch({
          type: types.FETCH_RECEIVE_PRODUCTS,
          data: json,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_ERROR_PRODUCTS,
          error,
        });
      });

  }
}