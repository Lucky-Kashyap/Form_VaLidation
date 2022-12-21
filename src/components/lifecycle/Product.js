
import React, { Component } from 'react'
import Cart from './Cart'
export default class Product extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ProductId:'',
         qty:0
      }
    }
    addToCart= (pid)=>{
        this.setState({
            ProductId:pid,
            qty:this.state.qty+1
        })
    }
  render() {
    return (
      <div>
      {this.state.qty}
        <button onClick={()=>{this.addToCart(1)}}>Update</button>
        <Cart/>
      </div>
    )
  }
}
