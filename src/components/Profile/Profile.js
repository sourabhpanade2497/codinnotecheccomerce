import React from 'react'
import Header from '../Header/Header'
import profile from '../../assets/profile.png'
import "./Profile.css";
import packagebox from "../../assets/Packagebox.svg";
import mappin from "../../assets/MapPin.svg";
import creditcard from "../../assets/CreditCard.svg";
import heart from "../../assets/Heart.svg";
import ticket from "../../assets/Ticket.svg";
import star from "../../assets/Star.svg";
import EditIcon from '@mui/icons-material/Edit';
function Profile() {
  const  handleOrder = () => {
    window.location.href = '/MyOrder'; 
  };
  const  handleAddress= () => {
    window.location.href = '/ManageAddress'; 
  };
  const  handlePayment= () => {
    window.location.href = '/Payment'; 
  };

  return (
    <div >
        <div className="Header-element">

        <Header/>
        </div>
        <div className="text-container">       
        
        <h2  className='myaccount_profile'>My Account</h2>
        <img src={profile} alt="profile" className="image" />
        <h2 className='profile_name'>Name</h2>
        <h2 className='gender'>Gender</h2>

        <div className="textareas">
        <input type="text" name="text" id="textarea" />
        <input type="text" name="text" id="textarea2" />
        <input type="text" name="text" id="textarea3" />
        </div>
        
        <div className="radiobuttons">
        <label className="Male">
             <input type="radio" name="radio" id="radiobutton1"  />
           Male </label>
           <label className="Female">
            <input type="radio" name="radio" id="radiobutton2" checked />
            Female </label>
            <label className="Notprefer">
            <input type="radio" name="radio" id="radiobutton3"  />
            Not prefer to say</label>
        </div>

        <div className="edit">
            Edit
        </div>
        <div className="edit-icon_profile">
            <EditIcon/>
        </div>
        <div className="phonenumber_profile">
            Phone Number
        </div>
        <div className="profile_email">
            E-mail
        </div>
        
        <div className="order-container">
        <div className="order-item" />
        <div className="my-order" onClick={handleOrder}>My Order</div>
        <img className="package-icon" alt="" src={packagebox} />
      </div>

      <div className="manage-container">
        <div className="manage-item" />
        <div className="manage-address-parent">
          <div className="manage-address" onClick={handleAddress}>Manage Address</div>
          <img className="mappin-icon" alt="" src={mappin} />
        </div>

        <div className="payment-container">
        <div className="payment-item" />
        <div className="payment" onClick={handlePayment}>Payment</div>
        <img className="creditcard-icon" alt="" src={creditcard} />
      </div>
        </div>

        <div className="wishlist-container">
        <div className="wishlist-item" />
        <div className="wishlist">Wishlist</div>
        <img className="heart-icon" alt="" src={heart} />
      </div>

      <div className="coupan-container">
        <div className="coupan-item" />
        <div className="my-coupans">My Coupans</div>
        <img className="ticket-icon" alt="" src={ticket} />
      </div>

      <div className="review-container">
        <div className="review-item" />
        <div className="my-reviews">{`My Reviews & Rating`}</div>
        <img className="star-icon" alt="" src={star} />
      </div>

      <div className="logout-container">
        <div className="logout-item" />
        <div className="log-out">Log Out</div>
      </div>
        </div>
        </div>
    
  )
}

export default Profile