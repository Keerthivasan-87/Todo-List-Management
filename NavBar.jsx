import React from 'react'
import './Nav.css'
const NavBar = () => {
  return (
    <div className="navbar">
        <nav>
            <div className="item-serach">
                <div className="input-serach">
                    <input type="text"  placeholder='Search Here'/>
                    <i>j</i>
                </div>
                <div className="user">
                    <img src="" alt="" />
                    <p>Username</p>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar