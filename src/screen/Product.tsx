/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { IProductDetail } from "../models/product"
const titleProduct = css({
  margin: '0',
  textDecoration: 'none',
  lineHeight: '24px',
  fontSize: '12px',
  fontWeight: 700,
  padding: '4px 0',
  color: 'black',
});
const titlePrice = css({
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#78ae1a',
  marginRight: '10px'
})

const titlePriceDiscount = css({
  color: '#ccc',
  textDecoration: 'line-through'
})
const imageProductHover = css({
  transition: 'transform .8s ease'
})


const imageProduct = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(204, 204, 204, 0.3);
  overflow: hidden;
  cursor: pointer;
  &:hover img{
    transform: scale(1.5)
  }
`

interface IProductProps {
  product: IProductDetail,
  handleAddToCart: Function
}
const Product = ({ product, handleAddToCart }: IProductProps) => {
  return <div className="col-md-6 col-lg-3">
    <div className="product" >
      <div className="product-image" css={[imageProduct]}>
        <img
          className="img-fluid"
          src={product.image}
          alt={product.name}
          css={imageProductHover}
        />
      </div>
      <div className="">
        <h3>
          <a href="#" css={titleProduct}>{product.name}</a>
        </h3>
        <div className="pricing d-flex justify-content-between align-items-center mb-4">
          <p className="price mb-0">
            <span className="price-sale" css={[titlePrice, titlePriceDiscount]} >{product.salePrice}</span>
            <span className={' mr-2 price-original'} css={titlePrice}>{product.originalPrice}</span>
          </p>
          <button type="button" className='btn btn-primary btn-sm' onClick={() => handleAddToCart(product)}>Add Cart</button>
        </div>

      </div>
    </div>
  </div>

}

export default Product;