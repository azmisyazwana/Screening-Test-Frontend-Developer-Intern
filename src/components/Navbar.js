import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='title'>Forum anak IT</h1>
        <div className='search-bar' >
            <input className='search' placeholder="Search"/>
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        <div className='link-btn'>            
            <div className='dropdown'>
                <button className='dropbtn'>Categories</button>
                <div class="dropdown-content">
                    <a href="#">Linux</a>
                    <a href="#">Windows</a>
                    <a href="#">MAC OS</a>
                    <a href="#">Android</a>
                    <a href="#">iOS</a>
                </div>
            </div>
            <button>Login</button>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Navbar