/** @jsx jsx */
import React, { Component } from 'react'
import Menu from '../../components/Menu';
import { css, jsx } from '@emotion/core'
import { connect } from 'react-redux';
const width30px = css({
  maxWidth: '30px'
});

const width20px = css({
  maxWidth: '20px'
});
const header = css`
    padding: 10px;
    background: #8BFEFF;
    position: sticky;
    top: 0;
    z-index: 1099;
`
class Header extends Component<any, any> {
  render() {
    return (
      <header className='container-fluid d-flex justify-content-between' css={header}>
        <section className="header-logo" css={width30px}>
          <img src='https://i.imgur.com/rG6xlAq.png' className='img-fluid' />
        </section>
        <Menu />
        <section className="header-action d-flex justify-content-between">
          <div className="header-search" css={width20px}>
            <img src='https://i.imgur.com/8mFf5Wd.png' className='img-fluid' />
          </div>
          <div className="header-cart" css={width20px}>
            <img src='https://i.imgur.com/7XVH5ky.png' className='img-fluid' />
          </div>
          <span>{this.props.cart.length}</span>
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