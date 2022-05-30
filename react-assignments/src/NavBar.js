import React from "react";
import {Link} from "react-router-dom";
import './App.css';

export default function NavBar(){
    return(
        <div className="navbar">
            <div className="title">
                Steve's IMdB
            </div>
            <ul className="nav-lnks">
                <Link to="/">Home</Link>
                <Link to="/movies">List of Movies</Link>
                <Link to="/add">Add a Movie</Link>

            </ul>




        </div>
    );
}
