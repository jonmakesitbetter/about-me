import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Nabtabs = () => {

    const location = useLocation();

    return (

        <div className="header card">
        <div className="card-body">
        <ul className="nav nav-tabs top-bar">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
            </li>
        </ul>
          <div className="container">
            <h3>Full Stack Web Developer</h3>
            <h3 id="signature">Jonathan Peach</h3>
          </div>
        </div>
      </div>

    );
};

export default Nabtabs;