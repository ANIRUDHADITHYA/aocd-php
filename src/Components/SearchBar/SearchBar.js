import { useState } from "react";
import './SearchBar.css';
import { useNavigate } from "react-router-dom";

function SearchBar({placeholder ,data}){

    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleClick() {
        
        if (search === "") {
            setError("Enter Something.");
            return;
        }

        navigate("/search?q=" + search);

        window.location.reload(false)
    }
    
    const handleEnter = (e) =>{
        console.log(error);
        if(e.key==='Enter') {
            if (e.target.value === "") {
                setError("Enter Something.");
                return;
            }
    
            navigate("/search?q=" + search);
            
            window.location.reload(false)
        }
    }

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input className='inputBar' type="text" placeholder={placeholder}  onChange={(event) =>{
														setSearch(event.target.value)}
													} onKeyPress={handleEnter}/>
                <div className='searchIcon'>
                <i className="fas fa-search"  onClick={handleClick}></i>
                </div>
            </div>
            <div className='dataResults'></div>
        </div>
    )
}

export default SearchBar;