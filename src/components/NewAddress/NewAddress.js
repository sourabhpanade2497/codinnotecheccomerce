import React,{useState} from 'react'
import "./NewAddress.css"
import Header from '../Header/Header'
function NewAddress() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [locality, setLocality] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [isCurrent, setIsCurrent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Phone Number: ${phoneNumber}, Address: ${address}, City: ${city}, Locality: ${locality}, State: ${state}, Pincode: ${pincode}, Is Current: ${isCurrent}`);
      }
  
  return (
    <div>
        <Header/>
        <div className="account-text-n">
            My Account
        </div>

        <div className="arrow-n">
            {`> ` }
        </div>

        <div className="manageorder-text-n">
            Manage Address
        </div>
    <div className="New_Address">

        <h2 >New Address</h2>

        <form onSubmit={handleSubmit}>
      <label className='Name_n'>
        Name
        <input id='name_n' type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label className='PhoneNumber_n'>
        Phone Number
        <input id='phonenumber_n' type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </label>
      <label className='Address_n'>
        Address
        <input id='address_n' type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <label className='City_n'>
        City
        <input id='city_n' type="text" value={city} onChange={(event) => setCity(event.target.value)} />
      </label>
      <label className='Locality_n'> 
        Locality
        <input id='locality_n' type="text" value={locality} onChange={(event) => setLocality(event.target.value)} />
      </label>
      <label className='State_n'>
        State
        <input id='state_n' type="text" value={state} onChange={(event) => setState(event.target.value)} />
      </label>
      <label className='Pincode_n'>
        Pincode
        <input id='pincode_n' type="text" value={pincode} onChange={(event) => setPincode(event.target.value)} />
      </label>
      <label className='set_n'>
        Set as Current Address
        <input id='setcurrent_n' type="checkbox" checked={isCurrent} onChange={() => setIsCurrent(!isCurrent)} />
      </label>
      <button type="submit" className='addaddress'>Add Address</button>
    </form>
    </div>
    </div>
  )
}

export default NewAddress