import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <h3>Counters of wins{" "} </h3>
                <span className="badge badge-pill badge-info">
                    Players with wins: {totalCounters}
                </span>
            </a>
        </nav>
    );
};
 
export default NavBar;

