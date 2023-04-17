import React from 'react'
import Header from '../Header/Header'
import "./SupportSuccess.css";
import SupportImage from "../../assets/SupportImage.png"

function SupportSuccess() {

    const handlesubmit = () => {
        window.location.href = "/Support";
      };
  return (
    <div>
         <Header/>

<div className="myorder-support">My Order</div>

<div className="arrow-support">{`> `}</div>

<div className="support">Support</div>

    <div className="Support-Logo">
        <img src={SupportImage} alt="" />
    </div>

    <div className="text-context">
        <h1>Our Team Will Contact You Shortly</h1>
        <h2>Please check your message, You may have recieved a ticket for your queries</h2>
    </div>

    <button className='btn_back' type="submit" onClick={handlesubmit}>Back</button>
    </div>
  )
}

export default SupportSuccess