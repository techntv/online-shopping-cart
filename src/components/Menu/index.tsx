/** @jsx jsx */
import React, { Component } from 'react'
import { menus } from './data';
import { NavLink } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import './index.css'
const nav = css`
    display: flex;
    flex: 2;
    justify-content: space-evenly;
`

const navLink = css`
    min-width: 200px;
    text-align: center;
    color: white;
    &:hover{
      text-decoration: none;
      font-weight: bold;
    }
`

export default class Menu extends Component {
  render() {
    return <nav css={nav}>
      {
        menus.map(menu => {
          return <NavLink exact key={menu.name} to={menu.path} activeClassName='menu-active' css={navLink}>{menu.name}</NavLink>
        })
      }
    </nav>
  }
}
