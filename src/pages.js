import React from "react";
import {Link} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>Main Page</h1>
            <nav>
                <Link to="ratings">Ratings</Link>
            </nav>
        </div>
    );
}

export function Ratings(){
    return(
    <div>
        <h1>Ratings</h1>
    </div>
    );
}