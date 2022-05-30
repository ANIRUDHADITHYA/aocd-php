import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HomeMainContent from "../MainContent/HomeMainContent";
import AboutUs from '../AboutUs/AboutUs';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';
import TypeWriterEffect from 'react-typewriter-effect';
import {Link} from "react-router-dom";
import Axios from "axios"
import { useState, useEffect } from 'react';


function Home() {
    const placeholderName="Enter Accession NO/Compound Name/Pubchem ID/Smiles/Inchl/Origin";
    
    
    const [compounds, setCompounds] = useState(0);
    const [plants, setPlants] = useState(0);
    const [marine, setMarine] = useState(0);
    const [microbes, setMicrobes] = useState(0);

    const localData = localStorage.getItem('data');
    
    if (localData){
        console.log("YES")
    } else { console.log("NO")}

    useEffect(()=>{
    
        setCompounds(localData ? (JSON.parse(localStorage.getItem('data'))).length : 100 );
        setPlants(localData ? (JSON.parse(localStorage.getItem('data')).filter((data)=>data.origin.includes("Plant"))).length : 100 );
        setMarine(localData ? (JSON.parse(localStorage.getItem('data')).filter((data)=>data.origin.includes("Marine"))).length : 100);
        setMicrobes(localData ? (JSON.parse(localStorage.getItem('data')).filter((data)=>data.origin.includes("Microbe"))).length : 100);

    },[])

	return (
		<div className="home">
            <div className="home-header">
                <Navbar />
                <div className='home-heading'>
                    <h1>
                    <TypeWriterEffect
                        
                        startDelay={300}
                        cursorColor="#3F3D56"
                        multiText={[
                        'Hi, Welcome to AOCD',
                        'Antiobesity Compound Database',
                        ]}
                        multiTextDelay={1500}
                        typeSpeed={130}
                        hideCursorAfterText={true}
                    />
                    </h1>
                    <p>Browse me from today and let Obesity go away</p>
                </div>
                <SearchBar placeholder={placeholderName}/>
                <div className='available-lable'>
                    <div className='lable-container'>
                        <Link to='/search?q=A' style={{ textDecoration: 'none' }}><div className="lable-item" ><h6>{compounds}</h6><p>Compounds</p></div></Link>
                        <div className="lable-item"><h6>197</h6><p>Literature</p></div>
                        <Link to='/search?q=plant' style={{ textDecoration: 'none' }}><div className="lable-item"><h6>{plants}</h6><p>Plants</p></div></Link>
                        <Link to='/search?q=marine' style={{ textDecoration: 'none' }}><div className="lable-item"><h6>{marine}</h6><p>Marine</p></div></Link>
                        <Link to='/search?q=microbe' style={{ textDecoration: 'none' }}><div className="lable-item"><h6>{microbes}</h6><p>Microbes</p></div></Link>                        
                    </div>
                </div>
            </div>
            <div className='homepage-content'>
                <HomeMainContent />
            </div>
            <div className='about-us'>
                <AboutUs />
            </div>
            <Footer />
        </div>
	);
}

export default Home;
