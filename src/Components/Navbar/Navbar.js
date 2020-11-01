import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [navIcon, setNaveIcon] = useState(true);
    const handleNavIcon = () =>{
        if(navIcon === true){
            setNaveIcon(false);
        }
        if(navIcon === false){
            setNaveIcon(true);
        }
    }

 

    return (
        <div className = 'nav-container'>
            <nav className="navbar navbar-expand-lg">
            <button onClick = {handleNavIcon} className="navbar-toggler btn btn-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {
                    navIcon ? <span className = 'text-success'><i className="fa fa-list"></i></span> : <span className = 'text-danger'><i className="fa fa-times"></i></span>
                }
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li  className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" exact to = '/'>Home</NavLink>
                    </li>
                    <li  className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" exact to = '/blogs'>Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" exact to = '/about'>About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" exact to = '/Projects'>Project</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="selected" exact to = '/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;