import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Catagories from "./components/Catagories/Catagories";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Catagories" element={<Catagories/>}/>
     </Routes>
    </div>
  );
}

export default App;
