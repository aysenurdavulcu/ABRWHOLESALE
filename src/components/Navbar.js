import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar__body">
            <Link to = '/' className="nav__item">Shop</Link>
            <Link to = '/about' className="nav__item">About</Link>
            <Link to = '/contact' className="nav__item">Contact</Link>
            <Link to = '/login' className="nav__item">Login</Link>
        </div>
    )
}

export default Navbar