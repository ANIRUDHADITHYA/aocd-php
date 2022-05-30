import './HomeMainContent.css';
import {Link} from "react-router-dom";
import home1 from '../Images/home1.png';
import home2 from '../Images/home2.png';
import home3 from '../Images/home3.png';
import { useState, useEffect } from 'react';

function HomeMainContent () {


    const [PL, setPL] = useState(0);
    const [AS, setAS] = useState(0);
    const [AG, setAG] = useState(0);

    const localData = localStorage.getItem('data');

    useEffect(()=>{


        setPL(localData ? (JSON.parse(localStorage.getItem('data')).filter((data)=>data.filter_id.includes("PL"))).length : 219);
        setAS(localData ? (JSON.parse(localStorage.getItem('data')).filter((data)=>data.filter_id.includes("AS"))).length : 91);
        setAG(localData ? (JSON.parse(localStorage.getItem('data')).filter((data)=>data.filter_id.includes("AG"))).length : 102);
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    

        
    

    return(
        <section className='home-main'>
            <div className='HMC-Title'>
                <h2>WHY AOCD ?<hr></hr></h2>
            </div>
        
        <div className="content-col">
            <p>
                Natural plant-based compounds provide a vast pool of inhibition with the ability of 
                being developed into clinical products. Various extracts, Secondary metabolites derived 
                from plants may be an excellent strategy for developing future effective, safe 
                anti-obesity drugs. Addition to this, compounds isolated from Marine Seaweeds and 
                Microbial sources are bound to have higher mode of inhibition against obesity. Algal 
                Metabolites, Microbial metabolite extracted are key essential components in targeting 
                the condition and thereby aids as a potential alternate for treating this disease. In 
                this database, we surveyed all possible natural bioactives with anti-obesity potential 
                targeting Pancreatic Lipase, suppressing appetite and inhibiting the adipocyte differentiation.
            </p>
            <br/>
            <p>
                Presently, it comprises of 349 compounds wherein 91 compounds are acting against Appetite 
                Suppressant, 219 Compounds are found to inhibit Pancreatic Lipase and 101 compounds 
                played significant role in inhibiting adipogenesis.
            </p>
        </div>
        <div className="row">
            <div className="img-col">
                <img src={home1} alt='image1'/>
                <Link to='/compounds/PL'><div className="layer"><h3>Pancreatic Lipase- {PL} Compounds </h3></div></Link>
            </div>
            <div className="img-col">
                <img src={home2} alt='image2'/>
                <Link to='/compounds/AS'><div className="layer"><h3>Appetite Suppressant- {AS} Compounds</h3></div></Link>
            </div>
            <div className="img-col">
                <img src={home3} alt='image3'/>
                <Link to='/compounds/AG'><div className="layer"><h3>Adipogenesis- {AG} Compounds</h3></div></Link>
            </div>
        </div>
        </section>
    )
}


export default HomeMainContent;
