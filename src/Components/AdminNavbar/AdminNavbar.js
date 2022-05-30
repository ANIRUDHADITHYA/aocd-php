import React, {useState} from "react";
import {Link} from "react-router-dom";
import './AdminNavbar.css';
import { useAuth } from './../Authentication/Auth';
import {useNavigate} from "react-router-dom";


const Navbar = (props) => {

    
    const [click,setClick] = useState(false);    
    const closeMobileMenu = () => {
        setClick(false);
        window.scroll({top:0, behavior: 'smooth'})
    }
    const handleClick = () => setClick(!click);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    
    window.addEventListener('scroll', changeNavbarColor);


    const auth = useAuth()
    const navigate = useNavigate();
    const logout = () =>{
        auth.logout();
        navigate("/")
    }
        
    
    return (
        <>
        <nav className="navbar">
            <div className={props.colors || colorChange ? 'colorChange' : 'defaultcolor'}>
            
            <div className="navbar-container">
                <Link to="/AOCD-Admin/Portal" className="navbar-logo">AOCD Admin Dashboard</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/AOCD-Admin/Portal/AddCompound" className="nav-links" onClick={closeMobileMenu}>
                            Add Compounds
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AOCD-Admin/Portal/Update_Del" className="nav-links" onClick={closeMobileMenu}>
                            Update Compounds
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={logout}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}


export default Navbar;