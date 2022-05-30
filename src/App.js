import './App.css';
import { Helmet } from "react-helmet";
import {BrowserRouter,  Routes,  Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Downloads from "./Components/Downloads/Downloads";
import AboutUsKnowMore from "./Components/AboutUsKnowMore/AboutUsKnowMore";
import ContactUs from "./Components/Footer/Footer";
import Compounds from './Components/Compounds/Compounds';
import ShowSummary from './Components/Compounds/ShowSummary/ShowSummary';
import SearchCompounds from './Components/SearchBar/SearchCompound';
import LoginPage from './Components/Authentication/LoginPage';
import AddCompounds from './Components/AddCompounds/AddCompounds';
import RequireAuth from './Components/Authentication/RequireAuth';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import { AuthProvider } from './Components/Authentication/Auth';
import UpdateCompounds from './Components/UpdateCompounds/UpdateCompounds';
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
      <AuthProvider>
      <BrowserRouter>
        <Helmet>
            <title>AOCD Database</title>
            <meta
              name="description"
              content="AOCD is an open access database that consists of a list of compounds isolated from plants, marine sources and microbes providing an extensive information on structural and molecular properties."
            />
            <meta
              name="keywords"
              content="Obesity,
              Anti-obesity,
              Obesity database,
              Natural compound database,
              plant compounds for obesity,
              marine compounds for obesity,
              microbial compounds for obesity,
              microbes for treating obesity, 
              plant for treating obesity, 
              Marine for treating obesity, 
              Natural sources for obesity,
              Herbal sources for obesity,
              seaweed co mpiunds,
              seaweed metabolite,
              seaweed for treating obesity,
              algal compound,
              algal compound for obesity,
              2D structure for antiobesity compounds,
              3D structure for antiobesity compounds,
              list of antiobesity compounds,
              adipogenesis, 
              Pancreatic lipase,
              Appetite suppresant,
              compounds for pancreatic lipase,
              compounds for adipogenesis,
              compounds for appetite suppresant,
              antiobesity compounds for pancreatic lipase,
              antiobesity compounds for adipogenesis,
              antiobesity compounds for appetite suppressant,
              inhibitory values for antiobesity compounds,
              IC50 values for antiobesity compounds,
              souces for antiobesity,
              alternative sources for treating obesity,
              natural sources for antiobesity,
              plant sources for obesity,
              marine sources for obesity,
              microbial sources for obesity,
              insilico antiobesity compounds,
              insilico approach on obesity,
              ADME properties for antiobesity compunds,
              ADME properties on obesity,
              Toxicity prediction for obesity,
              toxicity prediction for antiobesity,
              mechanism for treating obesity,
              AOCD,
              antiobesity compound,
              antiobesity database,
              database for obesity,
              list of obesity database,
              Why antiobesity"
          />
        </Helmet>
				<Routes>
        
					<Route exact path="/" element={<Home/>} />
          <Route exact path="/statistics" element={<Statistics/>}/>
          <Route exact path="/downloads" element={<Downloads/>}/>
          <Route exact path="/about-us" element={<AboutUsKnowMore/>}/>
          <Route exact path="/contact-us" element={<ContactUs/>}/>
          <Route exact path="/compounds/:id" element={<Compounds/>}/>
          <Route exact path="/summary/:id" element={<ShowSummary/>}/>
          <Route exact path="/search" element={<SearchCompounds/>}/>
          <Route exact path="/AOCD-Admin" element={<LoginPage/>} />
          <Route exact path="/AOCD-Admin/Portal" element={<RequireAuth><AdminDashboard/></RequireAuth>}/>
          <Route exact path="/AOCD-Admin/Portal/AddCompound" element={<RequireAuth><AddCompounds/></RequireAuth>}/>
          <Route exact path="/AOCD-Admin/Portal/Update_Del" element={<RequireAuth><UpdateCompounds/></RequireAuth>}/>
				</Routes>
			</BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;