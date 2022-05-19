import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './SearchCompound.css';
import { useState, useEffect } from 'react';
import ShowLess from '../Compounds/ShowLess/ShowLess';
import { Player } from '@lottiefiles/react-lottie-player';
import ReactPaginate from "react-paginate";
import SearchBar from "./SearchBar";


function SearchCompounds() {

const [data, setData] = useState([]);
const [filterNo , setFilter] = useState(0);
const getFilter = (filterId) => {
    setFilter(filterId)

    
}
const placeholderName="Enter Accession NO/Compound Name/Pubchem ID/Smiles/Inchl/Origin";
const getData=()=>{

    const db = JSON.parse(localStorage.getItem('data'));
    const params = new URLSearchParams(window.location.search);
    const search_key = params.get('q');
    console.log(search_key+"");
    getFilter(0)
    const result = db.filter((item) =>
    item.accession_no.toLowerCase() === (search_key.toLowerCase()) 
    || item.compound_name.toLowerCase() === (search_key.toLowerCase()) 
    || item.pubchem_cid.toLowerCase() === (search_key.toLowerCase()) 
    || item.sci_name.toLowerCase() === (search_key.toLowerCase())
    || item.iupac_name.toLowerCase() === (search_key.toLowerCase())
    || item.canl_smiles.toLowerCase() === (search_key.toLowerCase())
    || item.inchl.toLowerCase() === (search_key.toLowerCase())
    || item.molf.toLowerCase() === (search_key.toLowerCase())
    || item.moa.toLowerCase() === (search_key.toLowerCase())
    || item.origin.toLowerCase() === (search_key.toLowerCase())

    || item.accession_no.toLowerCase().includes(search_key.toLowerCase()) 
    || item.compound_name.toLowerCase().includes(search_key.toLowerCase()) 
    || item.pubchem_cid.toLowerCase().includes(search_key.toLowerCase()) 
    || item.sci_name.toLowerCase().includes(search_key.toLowerCase())
    || item.iupac_name.toLowerCase().includes(search_key.toLowerCase())
    || item.canl_smiles.toLowerCase().includes(search_key.toLowerCase())
    || item.inchl.toLowerCase().includes(search_key.toLowerCase())
    || item.molf.toLowerCase().includes(search_key.toLowerCase())
    || item.moa.toLowerCase().includes(search_key.toLowerCase())
    || item.origin.toLowerCase().includes(search_key.toLowerCase())
    
    );
    console.log(result);
        
    setData(result)

    
}
useEffect(()=>{
    
    getData();


},[])// eslint-disable-line react-hooks/exhaustive-deps


const [pageNumber, setPageNumber] = useState(0);

const usersPerPage = 10;
const pagesVisited = pageNumber * usersPerPage;


const pageCount = Math.ceil(data.length / usersPerPage);
const changePage = ({selected}) => {
    setPageNumber(selected);
};  
    
	return (
		<div className="compounds">
            <div className="compounds-header">
                <Navbar colors={true}/>
            </div>
            
            <div className='compounds-content'> 
            <div className="title"><h1>Search Results | </h1><h1 className="length-tilte">{data.length}</h1><h1> Result Found !</h1><hr/></div>
            <>
            <div className="Compound-Searchbar">
                <SearchBar placeholder={placeholderName}/>
            </div>
            <div className="data-container">
            
                <div className="compound-container">
                <div>
                {
                    data.length === 0 ? (

                        <div className="not-found">
                            <Player
                                autoplay
                                loop
                                src="https://assets7.lottiefiles.com/packages/lf20_buhby0ug.json"
                                style={{width: '25%' }}>
                            </Player>
                            <h2>Sorry, Result not Found</h2>
                        </div>
                    ) :(data && data.length>0 && data.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index)=><ShowLess compound={item} index={item.sno} filter={filterNo}/>))



                }
                </div>

                <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </div>
            </>
            </div>


            
            <Footer />
    </div>
	);
}

export default SearchCompounds;