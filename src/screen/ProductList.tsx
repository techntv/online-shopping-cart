/** @jsx jsx */
import * as React from 'react';
import data from "../../data.json"
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
    productList: this.props.items,
    sortType: 'az'
  }

  handleAddToCart = (product: any) => {
    this.props.addToCart(product)
  }

  handleChangeSort = (type: string) => {
    this.setState({ sortType: type })
  }

  handleSortItems = (type: string) => {
    let items = data;
    switch (type) {
      case 'az':
        items.sort((a: any, b: any) => a.name.toLowerCase() === b.name.toLowerCase() ? 0 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
        break;
      case 'za':
        items.sort((a: any, b: any) => a.name.toLowerCase() === b.name.toLowerCase() ? 0 : a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
        break;
      case 'lowtohigh':
        items.sort((a: any, b: any) => a.salePrice - b.salePrice)
        break;
      case 'hightolow':
        items.sort((a: any, b: any) => b.salePrice - a.salePrice)
        break;
      default:
        return items
    }
    return items;
  }

  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    let { productList, sortType } = this.state;
    let { from, to, total, items } = this.props;
    let itemsSort = this.handleSortItems(sortType)

    return <div className="container-fluid">
      <div className="row">
        <div className="col col-xs-12 col-md-3">

        </div>
        <div className="col col-xs-12 col-md-9">
          <h1 className='display-1 font-weight-bold'>Products</h1>
          <div className="my-4 text-right">
            <select value={this.state.sortType} onChange={(e) => this.handleChangeSort(e.target.value)}>
              <option value="az">Sort by A-Z</option>
              <option value="za">Sort by Z-A</option>
              <option value="lowtohigh">Sort by price: low to high</option>
              <option value="hightolow">Sort by price: high to low</option>
            </select>
          </div>
          <div className="product-list row" css={productListStyle}>
            {
              itemsSort.map((product: IProductDetail, index: number) => {
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