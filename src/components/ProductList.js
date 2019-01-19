import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../components/context'

export default class ProductList extends Component {
  state={
    products:[]
  }
  render() {
    console.log(this.state.products);
    
    return (  
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our "title="Products" />
            
            <div className="row">
              <ProductConsumer>
                {(value)=>{
                  return <h1>{value}</h1>
                }}
                </ProductConsumer>
              </div>
      </div>
        </div>
      </React.Fragment>
       //  <Product /> //
    )
  }
}
