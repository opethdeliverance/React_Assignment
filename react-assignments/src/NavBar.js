import React from "react";
import {Link} from "react-router-dom";
import './App.css';

export default function NavBar(){
    return(
        <div className="navbar">
            <div className="title">
                <header>Steve's IMdB</header>
            </div>
            <ul className="nav-lnks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">List of Movies</Link></li>
                <li><Link to="/add">Add a Movie</Link></li>

            </ul>




        </div>
    );
}
