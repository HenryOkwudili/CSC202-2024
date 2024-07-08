import React from 'react';

const NavBar = () => {
    return (
        <div className="navigation-bar">
            <div className="navigation-bar-left">
                <a href="/" className="active">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/patient/create">Add Patient</a>
                <a href="/record/create">Add Record</a>
            </div>
            <div className="navigation-bar-right">
                <input type="search" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default NavBar;
