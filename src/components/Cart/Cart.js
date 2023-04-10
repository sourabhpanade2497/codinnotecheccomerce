import React from 'react'
import "./Cart.css"
import Header from '../Header/Header';
import carticon from "../../assets/carticon.svg"
function Cart() {

   
  return (
    <div>
        <div className="header">
            <Header/>
        </div>
        <div className="your-bag">
            Your Bag
        </div>
        <div className="carticon">
            <img classname='carticon1' src={carticon} alt="carticon" />
        </div>
        <div className="text1">
            Please Fill Me
        </div>
        <div className="text2">
            It looks like you have not shop anything yet
        </div>
        <div className="text3">
           <a href="/"  >Continue Shopping</a> 
        </div>
    </div>
  )
}

export default Cart;