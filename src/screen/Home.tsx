/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'

const jumbotronBlock = css`
    position: relative;
`

const jumbotronText = css`
  position: absolute;
  top: 40%;
  right: 10%;
`
const jumbotronImage = css`
  max-height: calc(100vh - 50px)
`

const colorWhite = css`
  color: white;
`
export default class Home extends Component {
  render() {
    return (
      <div css={jumbotronBlock}>
        <img src="https://cdn1.vienthonga.vn/image/2019/10/3/100000_slider-h7-01.jpg" alt="" className='img-fluid mx-auto w-100' css={jumbotronImage} />
        <div css={jumbotronText}>
          <h1 className="display-1 font-weight-bold" css={colorWhite}>Homepage</h1>
          <p className="lead" css={colorWhite}>This is a homepage of the plant new parents.</p>
        </div>
      </div>
    )
  }
}
