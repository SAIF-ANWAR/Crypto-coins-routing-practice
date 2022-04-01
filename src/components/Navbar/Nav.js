import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import Customlink from '../CustomLink/Customlink';
const Nav = () => {
    return (
        <div className='navbar p-4 sticky  top-0 bg-white'>
            <div>
                <h2 className='hidden md:block text-3xl font-medium'> <Link to="/">Crypto Cafe</Link> </h2>
            </div>
            <div className='navigation'>
                <Customlink to="/">Home</Customlink>
                <Customlink to="/coins">Coins</Customlink>
                <Customlink to="/contact">Contact</Customlink>
                <Customlink to="/about">About</Customlink>
            </div>
        </div>
    );
};

export default Nav;