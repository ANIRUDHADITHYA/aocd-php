import React from "react";
import './ShowLess.css';
import { useNavigate } from "react-router-dom";

const ShowLess = (props) => {

    const navigate = useNavigate();

    function handleClick() {
    navigate("/summary/"+ props.index);
    window.scroll({top:0, behavior: 'smooth'})
}

    return(
        <div className="ShowLess-Div">
            {
                (props.filter===1) && (props.compound.filter_id==='PL' || props.compound.filter_id==='PL_AS_AG' || props.compound.filter_id==='PL_AS' || props.compound.filter_id==='PL_AG') ? (
                    <div className="showless-container">
                        <div className='compound-name'><h3 onClick={handleClick}>{props.compound.compound_name}</h3></div>
                        <div className='compound-details'><h4>Accession No:</h4> <p className='access_id'>{props.compound.accession_no}</p></div>
                        <div className='compound-details'><h4>PUBCHEM ID: </h4><p><a rel="noreferrer" target="_blank" href={'https://pubchem.ncbi.nlm.nih.gov/#query='+props.compound.pubchem_cid}>{props.compound.pubchem_cid}</a></p></div>
                        <div className='compound-details'><h4>Molecular Formula: </h4><p>{props.compound.molf}</p></div>
                        <div className='compound-details'><h4>Mode of Action: </h4><p>{props.compound.moa}</p></div>
                        <div className='compound-details'><h4>Origin: </h4><p>{props.compound.origin}</p></div>
                        <div className='compound-details'><h4>IUPAC Name: </h4><p>{props.compound.iupac_name}</p></div>
                        <div className='compound-details'><h4>Canonical Smiles: </h4><p>{props.compound.canl_smiles}</p></div>
                        <div className="compound-footer" id="submit" onClick={handleClick}>View Summary</div>
                    </div>) : (props.filter===2) && (props.compound.filter_id==='AS' || props.compound.filter_id==='PL_AS_AG' || props.compound.filter_id==='PL_AS' || props.compound.filter_id==='AS_AG') ? (
                    <div className="showless-container" >
                        <div className='compound-name'><h3 onClick={handleClick}>{props.compound.compound_name}</h3></div>
                        <div className='compound-details'><h4>Accession No:</h4> <p className='access_id'>{props.compound.accession_no}</p></div>
                        <div className='compound-details'><h4>PUBCHEM ID: </h4><p><a rel="noreferrer" target="_blank" href={'https://pubchem.ncbi.nlm.nih.gov/#query='+props.compound.pubchem_cid}>{props.compound.pubchem_cid}</a></p></div>
                        <div className='compound-details'><h4>Molecular Formula: </h4><p>{props.compound.molf}</p></div>
                        <div className='compound-details'><h4>Mode of Action: </h4><p>{props.compound.moa}</p></div>
                        <div className='compound-details'><h4>Origin: </h4><p>{props.compound.origin}</p></div>
                        <div className='compound-details'><h4>IUPAC Name: </h4><p>{props.compound.iupac_name}</p></div>
                        <div className='compound-details'><h4>Canonical Smiles: </h4><p>{props.compound.canl_smiles}</p></div>
                        <div className="compound-footer" id="submit" onClick={handleClick}>View Summary</div>
                    </div>) : (props.filter===3) && (props.compound.filter_id==='AG' || props.compound.filter_id==='PL_AS_AG' || props.compound.filter_id==='PL_AG' || props.compound.filter_id==='AS_AG') ? (
                    <div className="showless-container">
                        <div className='compound-name'><h3 onClick={handleClick}>{props.compound.compound_name}</h3></div>
                        <div className='compound-details'><h4>Accession No:</h4> <p className='access_id'>{props.compound.accession_no}</p></div>
                        <div className='compound-details'><h4>PUBCHEM ID: </h4><p><a rel="noreferrer" target="_blank" href={'https://pubchem.ncbi.nlm.nih.gov/#query='+props.compound.pubchem_cid}>{props.compound.pubchem_cid}</a></p></div>
                        <div className='compound-details'><h4>Molecular Formula: </h4><p>{props.compound.molf}</p></div>
                        <div className='compound-details'><h4>Mode of Action: </h4><p>{props.compound.moa}</p></div>
                        <div className='compound-details'><h4>Origin: </h4><p>{props.compound.origin}</p></div>
                        <div className='compound-details'><h4>IUPAC Name: </h4><p>{props.compound.iupac_name}</p></div>
                        <div className='compound-details'><h4>Canonical Smiles: </h4><p>{props.compound.canl_smiles}</p></div>
                        <div className="compound-footer" id="submit" onClick={handleClick}>View Summary</div>
                    </div>) : (props.filter===0) ? (
                    <div className="showless-container" >
                        <div className='compound-name'><h3 onClick={handleClick}>{props.compound.compound_name}</h3></div>
                        <div className='compound-details'><h4>Accession No:</h4> <p className='access_id'>{props.compound.accession_no}</p></div>
                        <div className='compound-details'><h4>PUBCHEM ID: </h4><p><a rel="noreferrer" target="_blank" href={'https://pubchem.ncbi.nlm.nih.gov/#query='+props.compound.pubchem_cid}>{props.compound.pubchem_cid}</a></p></div>
                        <div className='compound-details'><h4>Molecular Formula: </h4><p>{props.compound.molf}</p></div>
                        <div className='compound-details'><h4>Mode of Action: </h4><p>{props.compound.moa}</p></div>
                        <div className='compound-details'><h4>Origin: </h4><p>{props.compound.origin}</p></div>
                        <div className='compound-details'><h4>IUPAC Name: </h4><p>{props.compound.iupac_name}</p></div>
                        <div className='compound-details'><h4>Canonical Smiles: </h4><p>{props.compound.canl_smiles}</p></div>
                        <div className="compound-footer" id="submit" onClick={handleClick}>View Summary</div>
                    </div>) : (<></>)
            }
        </div>
    )
}
export default ShowLess;
