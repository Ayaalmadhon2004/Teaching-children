import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [menuBar, setMenuBar] = useState(false);

    const toggleMenu = () => {
        setMenuBar(prev => !prev);
    };

    return (
        <>
            <div className="contN section" onClick={toggleMenu}>
                <div className="logo">
                    LEADER'S KID
                </div>
                <ul className={`menu ${menuBar?'active':''}`}>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Classes</li>
                    <li>Pages</li>
                    <li>Contact us</li>
                </ul>
                <div className="btn">
                    <button className='btn'>Join Us</button>
                </div>
                <div className="openClose">
                    {menuBar ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
                </div>
            </div>
        </>
    );
};

export default Navbar;
