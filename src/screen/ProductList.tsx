/** @jsx jsx */
import * as React from 'react';
// import data from "../apiData.json"
import Product from "./Product"
import { css, jsx } from '@emotion/core'
import { connect } from 'react-redux';
import { addToCart } from '../actions/actionsCart';
import { fetchProducts } from '../actions/actionsProduct'
import { IProductDetail } from "../models/product"
const productListStyle = css({
  marginTop: '60px'
})

class ProductList extends React.Component<any, any> {
  state = {
    productList: this.props.items
  }

  handleAddToCart = (product: any) => {
    this.props.addToCart(product)
  }

  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    let { productList } = this.state;
    let { from, to, total, items } = this.props;
    return <div className="container-fluid">
      <div className="row">
        <div className="col col-xs-12 col-md-3">

        </div>
        <div className="col col-xs-12 col-md-9">
          <div className="my-4">
            <p>Hiển thị {from}-{to} trên {total} </p>
          </div>
          <div className="product-list row" css={productListStyle}>
            {
              items.map((product: IProductDetail, index: number) => {
                return <Product product={product} key={product.name + index} handleAddToCart={this.handleAddToCart} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  }
}

const mapDispatchToProps = {
  addToCart,
  fetchProducts
}

const mapStateToProps = (state: any, ownProps: any) => {
  const { products: { total, pageSize, page, items } } = state
  return {
    total,
    pageSize,
    page,
    from: (page * pageSize) - pageSize,
    to: page * pageSize,
    items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);