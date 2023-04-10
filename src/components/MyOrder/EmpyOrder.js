import React from 'react'
import "./EmptyOrder.css"
import Header from '../Header/Header';
import emptyimage from "../../assets/emptyorder.svg"
function EmpyOrder() {
  return (
    <div>
        <div className="header-element">
            <Header/>
        </div>
        
        <div className="account-text">
            My Account{'     >'}
        </div>

        <div className="myorder-text">
            My Order
        </div>

        <div className="emptyimage">
            <img src={emptyimage} alt="emptyorder" />
        </div>
        <div className="nothing">
            Nothing To Be Shown
        </div>
        <div className="additem">
            Let's get some order for you so you can check later
        </div>

        <div>
            <button className='shop-more-btn'>shop more</button>
        </div>
    </div>
  )
}

export default EmpyOrder;