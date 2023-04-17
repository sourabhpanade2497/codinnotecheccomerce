import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Catagories from "./components/Catagories/Catagories";
import Profile from "./components/Profile/Profile";
import MyOrder from "./components/MyOrder/MyOrder";
import Cart from "./components/Cart/Cart";
import EmpyOrder from "./components/MyOrder/EmpyOrder";
import Payment from "./components/Payment/Payment";

import DeliveryAddress from "./components/DeliveryAddress/DeliveryAddress";
import BasicDetails from "./components/BasicDetails/BasicDetails";
import NewAddress from "./components/NewAddress/NewAddress";
import Support from "./components/Support/Support";
import SupportSuccess from "./components/Support/SupportSuccess";
import MyCoupan from "./components/MyCoupan/MyCoupan";




function App() {
  return ( 
    <div className="App">
      
     <Routes>
      <Route path="/" element={<Home/> }/>
      
      <Route path="/Catagories" element={<Catagories/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/MyOrder" element={<MyOrder/>}/>
      <Route path="/EmptyOrder" element={<EmpyOrder/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/DeliveryAddress" element={<DeliveryAddress/>}/>
      <Route path="/BasicDetails" element={<BasicDetails/>}/>
      <Route path="/NewAddress" element={<NewAddress/>}/>
      <Route path="/Support" element={<Support/>}/>
      <Route path="/SupportSuccess" element={<SupportSuccess/>}/>
      <Route path="/MyCoupan" element={<MyCoupan/>}/>
     
     </Routes>
     
    </div>
  );
}

export default App;
