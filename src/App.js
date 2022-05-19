import './App.css';
import {BrowserRouter,  Routes,  Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Downloads from "./Components/Downloads/Downloads";
import AboutUsKnowMore from "./Components/AboutUsKnowMore/AboutUsKnowMore";
import ContactUs from "./Components/Footer/Footer";
import Compounds from './Components/Compounds/Compounds';
import ShowSummary from './Components/Compounds/ShowSummary/ShowSummary';
import SearchCompounds from './Components/SearchBar/SearchCompound';
import { useState, useEffect } from 'react';
import Axios from "axios";


function App() {


  const [data, setData] = useState([]);

  const getData=()=>{

    Axios.get("https://aocd.swmd.co.in/aocdbackend/api/getdata").then((response)=>{
    localStorage.setItem('data', JSON.stringify(response.data));
    setData(response.data);
    });

    
}
useEffect(()=>{
    getData()
    
},[])// eslint-disable-line react-hooks/exhaustive-deps

console.log(data);

  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home/>} />
          <Route exact path="/statistics" element={<Statistics/>}/>
          <Route exact path="/downloads" element={<Downloads/>}/>
          <Route exact path="/about-us" element={<AboutUsKnowMore/>}/>
          <Route exact path="/contact-us" element={<ContactUs/>}/>
          <Route exact path="/compounds/:id" element={<Compounds/>}/>
          <Route exact path="/summary/:id" element={<ShowSummary/>}/>
          <Route exact path="/search" element={<SearchCompounds/>}/>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;