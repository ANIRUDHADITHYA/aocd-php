import './AboutUsKnowMore.css';
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Player } from '@lottiefiles/react-lottie-player';

function AboutUsKnowMore(){
    return(
        <div className='aboutus-know-more'>
            <div className="aboutus-header">
                <Navbar/>
                <div className='aboutus-heading'>
                    <h1>About <span>Us</span></h1>
                </div>
            </div>
            <div className='aboutus-content'>
                <div className='au-container'>
                    <p>
                    AOCD delivers a comprehensive resource on botanicals isolated from plant source(s) 
                    and its classification. It also includes compounds derived from Marine seaweeds; 
                    Microbial source that are found to have potent source of inhibition targeting obesity. 
                    This database provides extensive information on physicochemical descriptors, pharmacokinetic 
                    properties, Drug like nature, Computational toxicity prediction, Lipophilic properties of compounds 
                    to support drug discovery. Every compound in AOCD has its own specific mode of action against obesity 
                    consisting of more than various data fields covering parameters like Molecular Weight, Molecular Formula, Inchl, 
                    Canonical Smiles, IUPAC name, xLogP3, Number of hydrogen bond donors and acceptors, Molar refractivity, TPSA, 
                    Number of rotatable bonds and Number of heavy atoms, Lipinski’s rule, Bioavailability score, BBB permeant, LD50 
                    values, and Toxicity Class. The biological activity of all the compounds depending on the Inhibitory Concentration 
                    has also been represented in this AOCD. The 2D and 3D structure of the compound can be accessed through Sdf 
                    format/ Png format depending on the relevance. 

                    </p>
                    <br/>
                    <p>                  
                        In this Repository users can retrieve data either by entering Accession number, Compound search, 
                        PUBCHEM ID, SMILES, Inchl or through mode of action. This is available as an open access database 
                        wherein public can access and download relevant information as per requirement. 
                    </p>
                </div>
                <div className='au-container-img'>
                <Player
                    autoplay
                    loop
                    src="https://assets7.lottiefiles.com/packages/lf20_v1yudlrx.json"
                    style={{width: '100%' }}>
                    </Player>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsKnowMore;