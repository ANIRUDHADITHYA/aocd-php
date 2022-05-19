import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Compounds.css';
import { useState, useEffect } from 'react';
import ShowLess from "./ShowLess/ShowLess";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SearchBar from "./../SearchBar/SearchBar";

function Compounds() {

  const params = useParams();


  const [data, setData] = useState([]);

  const [filterNo , setFilter] = useState( params.id === 'PL' ? 1 : params.id === 'AS' ? 2 : params.id === 'AG' ? 3 : 0);
  const getFilter = (filterId) => {
    setFilter(filterId); 

    setData(JSON.parse(localStorage.getItem('data')).filter((item) =>
      
        filterId === 1 ? item.filter_id==='PL' || item.filter_id==='PL_AS_AG' || item.filter_id==='PL_AS' || item.filter_id==='PL_AG' :
        filterId === 2 ? item.filter_id==='AS' || item.filter_id==='PL_AS_AG' || item.filter_id==='AS_AG' || item.filter_id==='PL_AS' :
        filterId === 3 ? item.filter_id==='AG' || item.filter_id==='PL_AS_AG' || item.filter_id==='AS_AG' || item.filter_id==='PL_AG' : 
        item.filter_id === 'PL' || item.filter_id === 'PL_AS_AG' || item.filter_id === 'AS' || item.filter_id === 'AG' || item.filter_id === 'PL_AG' || item.filter_id === 'PL_AS' || item.filter_id === 'AS_AG'
      
      ))

      setPageNumber(0);
  }

  const getData=()=>{

    // fetch(restEndpoint)
    //   .then(function(response){
    //     console.log(response)
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //     setData(myJson)
    //   });

      setData(JSON.parse(localStorage.getItem('data')).filter((item) =>
      
        filterNo === 1 ? item.filter_id==='PL' || item.filter_id==='PL_AS_AG' || item.filter_id==='PL_AS' || item.filter_id==='PL_AG' :
        filterNo === 2 ? item.filter_id==='AS' || item.filter_id==='PL_AS_AG' || item.filter_id==='AS_AG' || item.filter_id==='PL_AS' :
        filterNo === 3 ? item.filter_id==='AG' || item.filter_id==='PL_AS_AG' || item.filter_id==='AS_AG' || item.filter_id==='PL_AG' : 
        item.filter_id === 'PL' || item.filter_id === 'PL_AS_AG' || item.filter_id === 'AS' || item.filter_id === 'AG' || item.filter_id === 'PL_AG' || item.filter_id === 'PL_AS' || item.filter_id === 'AS_AG'
      
      ))
    
  }
  useEffect(()=>{
    getData()

  },[])// eslint-disable-line react-hooks/exhaustive-deps
  console.log(getFilter)
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const placeholderName="Enter Accession NO/Compound Name/Pubchem ID/Smiles/Inchl/Origin";
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
    window.scroll({top:0, behavior: 'smooth'})
  };  
	return (
		<div className="compounds">
            <div className="compounds-header">
                <Navbar colors={true}/>
            </div>
            
            <div className='compounds-content'>
              <div className="title"><h1>Repository</h1></div><hr></hr>
              <>
              <div className="data-container">
                <div className='menubar-container'>
                  
                  {/*<div className={(filterNo===0)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(0)}>
                    <h3>ALL</h3>
                  </div>
                  <Link to='/compounds/PL'><div className={(filterNo===1)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(1)}>
                    <h3>Pancreatic Lipase</h3>
                  </div></Link>
                  <Link to='/compounds/AS'><div className={(filterNo===2)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(2)}>
                    <h3>Appetite Suppressant</h3>
                  </div></Link>
                  <Link to='/compounds/AG'><div className={(filterNo===3)?'menubar-filter-selected' : 'menubar-filter'} onClick={()=>getFilter(3)}>
                    <h3>Adipogenesis</h3>
  </div></Link>*/}
                </div>
                <div className="Compound-Searchbar">
                <SearchBar placeholder={placeholderName}/>
                </div>
                <div className="compound-container">
                  <div>
                  {
                    data && data.length>0 && data.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index)=><ShowLess compound={item} index={item.sno} filter={filterNo}/>)
                  }
                  </div>
                  <div>
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
              </div>
              </>
            </div>
            <Footer />
    </div>
	);
}

export default Compounds;
