/** @jsx jsx */
import React, { Component } from 'react'
import Menu from '../../components/Menu';
import { css, jsx } from '@emotion/core'
import { connect } from 'react-redux';
const width30px = css({
  maxWidth: '30px'
});

const width20px = css({
  maxWidth: '30px'
});
const header = css`
    padding: 20px;
    background: #80b435;
    position: sticky;
    top: 0;
    z-index: 1099;
`

const numberCart = css`
  position: absolute;
    right: -10px;
    font-size: 15px;
    top: -10px;
    background: white;
    width: 20px;
    height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
`

const cartItems = css`
  position: absolute;
    min-width: 300px;
    width: 100%;
    right: 0;
    background: white;
    top: 30px;
    border-radius: 4px;
    list-style: none;
    padding: 20px;
    margin: 0;
`

const cartDetail = css`
   display: flex;
    align-items: center;
    justify-content: space-between;
`

const cartDetailImage = css`
    width: 50px;
`
class Header extends Component<any, any> {
  state = {
    isShowCartItem: false
  }
  render() {
    const { isShowCartItem } = this.state;
    return (
      <header className='container-fluid d-flex justify-content-between' css={header}>
        <section className="header-logo" css={width30px}>
          <img src='https://i.imgur.com/rG6xlAq.png' className='img-fluid' />
        </section>
        <Menu />
        <section className="header-action d-flex justify-content-between position-relative">
          <div className="header-search" css={width20px}>
            <img src='https://i.imgur.com/8mFf5Wd.png' className='img-fluid' />
          </div>
          <div className="header-cart" css={width20px}>
            <img src='https://i.imgur.com/7XVH5ky.png' className='img-fluid' />
          </div>
          <div css={numberCart} onClick={() => this.setState({ isShowCartItem: !this.state.isShowCartItem })}>
            <span >{this.props.cart.length}</span>
          </div>

          {
            isShowCartItem ? this.props.cart.length > 0 ? <ul css={cartItems}>
              {
                this.props.cart.map((i: any) => {
                  return <li css={cartDetail} key={`header-${i.name}`}>
                    <div className='d-flex align-items-center'>
                      <img src={i.thumbnail} alt="" css={cartDetailImage} />
                      {i.name}
                    </div>

                    <span className='cursor-pointer'>x</span>
                  </li>
                })
              }
            </ul> : <ul css={cartItems}>
                <li>No items</li>
              </ul> : null
          }

        </section>
      </header>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Header)