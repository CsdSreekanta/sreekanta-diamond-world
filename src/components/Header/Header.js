import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-title'>
                <a href="/shop">Shop</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;