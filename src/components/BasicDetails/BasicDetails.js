import React, {useState} from 'react'
import "./BasicDetails.css"
import Header from '../Header/Header'

import Tick2 from "../../assets/tick2.svg"
function BasicDetails() {
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setphonenumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Phone Number: ${phonenumber}`);
      }
  return (
    <div>
        <Header/>
        <div className="basicdetail_b">
        <div className="tick_b">
            <img src={Tick2} alt="tick_b" />
             <p>Basic Deatils</p> 
            </div>
    </div>
    <div className="vector1_b"> </div>
    <div className="Address_b">
        <div className="tick2_b">
            <img src={Tick2} alt="tick_b" />
            <p>Address</p>
            </div>
    </div>
    <div className="vector2_b"></div>
    <div className="Payment_b">
        <div className="tick3_b">
            <img src={Tick2} alt="tick_b" />
            <p>Payment</p>
            </div>
    </div>
    <div className="vector3_b">
        
        </div>
    <div className="Confirm_b">
        <div className="tick4_b">
            <img src={Tick2} alt="tick2_b" />
            <p>Confirm</p>
            </div>
    </div>
    <div className="vector4_b"></div>
    <div className="Done_b">
        <div className="tick5_b">
            <img src={Tick2} alt="tick_b" />
            <p>Done</p>
            </div>
    </div>

    <div className="heading2">

<h2>Basic Details</h2>
</div>
<form >
<div className="basicdetailtextarea">
        <input type="text" name="text" id="nametextarea" value={name} onChange={(event) => setName(event.target.value)} />
        <input type="email" name="text" id="emailarea"  value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="tel" name="text" id="phonenumbertextarea" value={phonenumber} onChange={(event) => setphonenumber(event.target.value)}/>
        </div>
<div className="line-draw"></div>
<h2 className='name'>Name</h2>

<h2 className='email'>E-mail</h2>
<h2 className='phonenumber'>Phone Number</h2>
<button type='submit' id='btnnext' onSubmit={handleSubmit}>Next</button>
</form>
</div>

  )
}

export default BasicDetails