import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';



export default class extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* Logo courtesy of https://makoto.dunked.com/upgrade via https://www.iconfinder.com/icons/1243689/call_phone_icon*/}
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand"></img>
        </Link> 
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus" /> Basket
            </span>
          </ButtonContainer>
        </Link>
      </nav>
    )
  }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background-color:transparent;
  border:0.05rem solid var(--lightBlue);
  color:var(--lightBlue);
  border-radius:0.5rem;
  padding: 0.2tem 0.5rem;
  cursor:pointer;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.5s ease-in-out;
&:hover{
  background:var(--lightBlue);
  color:var(--mainBlue);
}
&:focus{
  outline: none;
}
`