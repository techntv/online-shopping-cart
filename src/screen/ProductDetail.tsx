/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { IProductDetail } from "../models/product"
import { Link, withRouter } from 'react-router-dom'
import { fetchProductDetail } from '../actions/actionsProduct'
import { addToCart } from '../actions/actionsCart';
import { connect } from 'react-redux';
class ProductDetailWithRouter extends React.Component<any, any> {
  componentDidMount() {
    this.props.fetchProductDetail(this.props.match.params.productid);
  }
  render() {
    const { detail } = this.props;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <img src={detail.image} alt={detail.shortDescription} />
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <h1 className='display-4 font-weight-bold'>{detail.name}</h1>
            <p>Description: {detail.shortDescription}</p>
            <p>Price: {detail.salePrice}</p>
            <div className="text-right">
              <button className="btn btn-primary" onClick={() => this.props.addToCart(detail)}>Buy Now</button>
            </div>
          </div>
        </div>

      </div>

    )
  }
}


const ProductDetail = withRouter(ProductDetailWithRouter)

const mapDispatchToProps = {
  fetchProductDetail,
  addToCart
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    detail: state.productDetail.data
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);