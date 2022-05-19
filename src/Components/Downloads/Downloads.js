import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Downloads.css';

function Downloads() {
	return (
		<div className="downloads">
            <div className="downloads-header">
            <Navbar/>
                <div className='downloads-heading'>
                    <h1>Downloads</h1>
                </div>
            </div>
            <div className='downloads-content'>
                <div className="download_col">
                    <h1>2D Structure</h1>
                    <h3>Download 2D Structure for all Compounds</h3>
                    <div className="download-format">
                        <a href={process.env.PUBLIC_URL+"/Images/2D_ZIP.zip"} download style={{paddingLeft:"10px"}}>
                            <h5><i className="fa-solid fa-download"/>SDF</h5>
                        </a> 
                    </div>
                </div>
                <div className="stick"></div>
                <div className="download_col">
                    <h1>3D Structure</h1>
                    <h3>Download 3D Structure for all Compounds</h3>
                    <div className="download-format">
                        <a href={process.env.PUBLIC_URL+"/Images/3D_ZIP.zip"} download style={{paddingLeft:"10px"}}>
                            <h5><i className="fa-solid fa-download"/>SDF</h5>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
	);
}

export default Downloads;
