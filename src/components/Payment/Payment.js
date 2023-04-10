import React from 'react'
import "./Payment.css"
import Tick from "../../assets/tick.svg"
import Tick2 from "../../assets/tick2.svg"
import Header from '../Header/Header'
function Payment() {
    // const [step, setStep] = useState(1);

    // const handleStepChange = (newStep) => {
    //   setStep(newStep);
    // }
  return (
    
         <>

         <div className="header-bar">
            <Header/>
         </div>
       {/* <div className="progress-bar">
      <div
        className={`progress-circle ${step >= 1 ? "blue-bg" : ""}`}
        onClick={() => handleStepChange(1)}
      >
        Basic Details
      </div>
      <div
        className={`progress-circle ${step >= 2 ? "blue-bg" : ""}`}
        onClick={() => handleStepChange(2)}
      >
        Address
      </div>
      <div
        className={`progress-circle ${step >= 3 ? "blue-bg" : ""}`}
        onClick={() => handleStepChange(3)}
      >
        Payment
      </div>
      <div
        className={`progress-circle ${step >= 4 ? "blue-bg" : ""}`}
        onClick={() => handleStepChange(4)}
      >
        Confirm
      </div>
      <div
        className={`progress-circle ${step >= 5 ? "blue-bg" : ""}`}
        onClick={() => handleStepChange(5)}
      >
        Done
      </div>
    </div> */}
    
    <div className="basicdetail">
        <div className="tick">
            <img src={Tick} alt="tick" />
             <p>Basic Deatils</p> 
            </div>
    </div>
    <div className="vector1"> </div>
    <div className="Address">
        <div className="tick2">
            <img src={Tick} alt="tick" />
            <p>Address</p>
            </div>
    </div>
    <div className="vector2"></div>
    <div className="Payment">
        <div className="tick3">
            <img src={Tick2} alt="tick" />
            <p>Payment</p>
            </div>
    </div>
    <div className="vector3">
        
        </div>
    <div className="Confirm">
        <div className="tick4">
            <img src={Tick2} alt="tick2" />
            <p>Confirm</p>
            </div>
    </div>
    <div className="vector4"></div>
    <div className="Done">
        <div className="tick5">
            <img src={Tick2} alt="tick" />
            <p>Done</p>
            </div>
    </div>

    <div className="heading2">

    <h2>Payment Method</h2>
    </div>
    <div className="line-draw"></div>
    </>
   
  )
}

export default Payment