import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () =>{
    return(
        <div>
            <header className="m-4 header text-info text-center">
                <h1 className="display-4">WEATHER APP</h1>
            </header>
            <nav className="mt-4 navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav d-flex justify-content-between w-100">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-info text-uppercase font-weight-bold" href="#">
                           Local Weather 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link text-info text-uppercase font-weight-bold" href="#">
                            Search Weather
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/user' className="nav-link text-info text-uppercase font-weight-bold" >
                            My Weather
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-link text-info text-uppercase font-weight-bold" >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
}