import React, { useState } from 'react'
import './Navbar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({onClickLogin, onClickRegister, onClickMenu}) => {

    const [activeMenu, setActiveMenu] = useState(false)

    const handleClickMenu = () =>{
        setActiveMenu(true)
    }
  return (
    <div>
        <div className='navbar'>
        <h1 className='title'>Forum anak IT</h1>
        <div className='search-bar mobile-menu' >
            <input className='search' placeholder="Search"/>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        <div className='link-btn mobile-menu'>            
            <div className='dropdown'>
                <button className='dropbtn btn-navbar'>Categories</button>
                <div className="dropdown-content">
                    <a href="#">Linux</a>
                    <a href="#">Windows</a>
                    <a href="#">MAC OS</a>
                    <a href="#">Android</a>
                    <a href="#">iOS</a>
                </div>
            </div>
            <button className='btn-navbar mobile-menu' onClick={onClickLogin}>Login</button>
            <button className='btn-navbar mobile-menu' onClick={onClickRegister}>Register</button>
        </div>
        {!activeMenu && (<div className='menu-btn' onClick={handleClickMenu}>
            <FontAwesomeIcon className='menu' icon={faBars}/>
        </div>)}

        {activeMenu && (<div className='menu-float'>
            <div className='search-bar' >
                <input className='search' placeholder="Search"/>
                <i className="fa-solid fa-magnifying-glass search-icon-m"></i>
            </div>
            <div className='link-btn'>            
                <div className=''>
                    <button className='dropbtn btn-menu'>Categories</button>
                    <div className="category">
                        <a href="#">Linux</a>
                        <a href="#">Windows</a>
                        <a href="#">MAC OS</a>
                        <a href="#">Android</a>
                        <a href="#">iOS</a>
                    </div>
                </div>
                <button className='btn-menu' onClick={onClickLogin}>Login</button>
                <button className='btn-menu' onClick={onClickRegister}>Register</button>
            </div>
        </div>)}
    </div>
    </div>
    
  )
}

export default Navbar