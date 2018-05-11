import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () =>{
    return(
        <div>
            <header className="m-4 header">
                <h1>WEATHER APP</h1>
            </header>
            <nav className="p-0 mt-4 navbar">
                <ul className="nav nav-tabs d-flex w-100">
                    <li className=" nav-item">
                        <Link to="/" className="nav-link" href="#">
                            Weather In Your Localisation
                        </Link>
                    </li>
                    <li className=" nav-item">
                        <Link to="/search" className="nav-link" href="#">
                            Search Weather
                        </Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
}