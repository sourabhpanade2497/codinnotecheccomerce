import React from 'react'
import "./DeliveryAddress.css"
import {AiOutlineHome} from "react-icons/ai"
import {HiOutlineBuildingOffice2} from "react-icons/hi2"
import Header from '../Header/Header'
import Tick2 from "../../assets/tick2.svg"
import Tick from "../../assets/tick.svg"
function DeliveryAddress() {
    const  handlebuttonclick = () => {
        window.location.href = '/Payment'; 
      };

      const  handleclick = () => {
        window.location.href = '/NewAddress'; 
      };
  return (
    
    <div>
    <Header/>

    <div className="basicdetail_d">
        <div className="tick_d">
            <img src={Tick} alt="tick_d" />
             <p>Basic Deatils</p> 
            </div>
    </div>
    <div className="vector1_d"> </div>
    <div className="Address_d">
        <div className="tick2_d">
            <img src={Tick2} alt="tick_d" />
            <p>Address</p>
            </div>
    </div>
    <div className="vector2_d"></div>
    <div className="Payment_d">
        <div className="tick3_d">
            <img src={Tick2} alt="tick_d" />
            <p>Payment</p>
            </div>
    </div>
    <div className="vector3_d">
        
        </div>
    <div className="Confirm_d">
        <div className="tick4_d">
            <img src={Tick2} alt="tick2_d" />
            <p>Confirm</p>
            </div>
    </div>
    <div className="vector4_d"></div>
    <div className="Done_d">
        <div className="tick5_d">
            <img src={Tick2} alt="tick_d" />
            <p>Done</p>
            </div>
    </div>
    <div className="heading_h2">
    <h2>Choose Your Delivery Address</h2>
    </div>
    <div className="line_d"></div>
    <div className="radio_delivery">
        <input type="radio" name="home" id="delivery_1" checked/>
        <input type="radio" name="home" id="delivery_2" />
    </div>
    
    <div className="home-icon">
    <AiOutlineHome size={25}/>
    </div>
    <div className="home_current">
        Home | Current Address
        <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cupiditate corrupti dolorum,<br />
              ullam asperiores voluptatum assumenda repellat optio nesciunt, ipsum delectus. Velit iure alias <br /> 
              placeat ipsum inventore incidunt reiciendis dolores? adipisicing elit. Nisi cupiditate corrupti dolorum
             </p>
        </div>
    <div className="Office_Delivery">Office
    
    <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla velit voluptas ratione reiciendis reprehenderit,
             repellat qui asperiores cupiditate debitis enim officiis alias. Atque nostrum aut labore cumque sit beatae! repellat 
             qui asperiores cupiditate debitis enim officiis alias. Atque nostrum aut labore
             </p>    
    </div>
   
    
    <div className="office-icon">
    <HiOutlineBuildingOffice2 size={25} />
    </div>

    <button className='button_Next' type="submit" onClick={handlebuttonclick} >Next</button>
    <div className="Manage_Address">
    <h2 onClick={handleclick} >Manage Address</h2>

    </div>
    </div>
    
  )
}

export default DeliveryAddress