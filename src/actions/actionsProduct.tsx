import * as types from './actionsTypes';

export function fetchProducts() {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: types.FETCH_PRODUCTS
    });
    fetch('http://api.demo.nordiccoder.com/api/products')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // console.log('json', json.status);
        dispatch({
          type: types.FETCH_RECEIVE_PRODUCTS,
          data: json.body,
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

export function fetchProductDetail(productid: string) {
  return (dispatch: Function, getState: any) => {
    dispatch({
      type: types.FETCH_PRODUCT_DETAIL
    });

    fetch(`http://api.demo.nordiccoder.com/api/products/${productid}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch({
          type: types.FETCH_RECEIVE_PRODUCTDETAIL,
          data: json.body
        })
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_ERROR_PRODUCTDETAIL,
          error,
        });
      });
  }
}