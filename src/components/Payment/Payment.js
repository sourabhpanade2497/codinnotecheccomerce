import React,{ useState }  from 'react'
import "./Payment.css"
import Tick from "../../assets/tick.svg"
import Tick2 from "../../assets/tick2.svg"
import Header from '../Header/Header'
import mastercard from "../../assets/mastercard.png"
function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [value, setValue] = useState('');
 

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: submit payment information
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;
    // Remove all non-digit characters
    inputValue = inputValue.replace(/\D/g, '');
    // Add a hyphen after every fourth digit
    inputValue = inputValue.replace(/(.{4})/g, '$1-');
    // Remove any extra hyphens at the end
    inputValue = inputValue.replace(/-$/, '');
    setValue(inputValue);
  };

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

<div className="invoice">

    <h2>Invoice (Free) </h2>
</div>
    
    <div className="addcoupan">

    <h3>Add Coupan</h3>
    </div>

     <div className='form-container' onSubmit={handleSubmit}>

     
      <div className='Credit_Debit'>
          Debit/Credit Card
      </div>
      <div className="input-container">
      <input type="text" placeholder="Card number" className="input-text" maxLength={19}  value={value} onChange={handleChange}/>
    </div>
      <div className="input-date">
      <input type="text" placeholder="MM/YY" className="input-number" />
    </div>
      <div className="input-cvv">
      <input type="text" placeholder="CVV" className="input-cv" maxLength={3} />
    </div>

    <div className="mastercard">
      <img src={mastercard} alt="" />
    </div>


    <div className="other_payment">
      Other Payment Option
    </div>
      
      <div className='phone_pe'>
        <label>
          <input
            type="radio"
            value="phonepe"
            checked={paymentMethod === 'phonepe'}
            onChange={handlePaymentMethodChange}
          />
          Phone Pe
        </label>
      </div>

      <div className='upi'>
        <label>
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === 'upi'}
            onChange={handlePaymentMethodChange}
          />
          UPI
        </label>
      </div>

      <div className='googlepay'>
        <label>
          <input
            type="radio"
            value="googlepay"
            checked={paymentMethod === 'googlepay'}
            onChange={handlePaymentMethodChange}
          />
          Google Pay
        </label>
      </div>

      <div className='banktransfer'>
        <label>
          <input
            type="radio"
            value="banktransfer"
            checked={paymentMethod === 'banktransfer'}
            onChange={handlePaymentMethodChange}
          />
          Bank Transfer
        </label>
      </div>

      <div className="delivery_payment"></div>
      <div className="delivery_tab">Delivery</div>
      <div className="delivery_free">Free</div>
      <div className="delivery_line"></div>
      <div className="delivery_total">Total</div>
      <div className="cost">₹ -</div>


      <button className='next_payment' type="submit">Next</button>
      </div>


    </>
   
  )
}

export default Payment