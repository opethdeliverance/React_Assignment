import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
Ratings,
Home

} from "./pages";


function App2(props) {



    const [emotion, setEmotion] = useState("questionable...");
    const [secondary, setSecondary] = useState("tired");

    useEffect(() => {
        console.log(`It's ${emotion} around here!` );
    }, []);

    useEffect(() => {
        console.log(`It's ${secondary} around here!` );
    }, []);
    return(
        <>

        <Routes>
            <Route path = "/" element = {<Home/>}/>

            <Route path = "/ratings" element = {<Ratings/>}/>
            console.log(Ratings);
        </Routes>

        <h1>Current emotion is {emotion} and {secondary}</h1>
        <button onClick = {() => setEmotion ("frustrated")}>
            Frustrate
        </button>

        <button onClick = {() => setEmotion ("enthusiastic")}>
            Enthuse
        </button>

        <button onClick = {() => setEmotion ("Bored")}>
            Bored
        </button>

        <button onClick = {() => setSecondary ("crabby")}>
            Crabby
        </button>

    
        
        
        </>
    )

    
  }
  
  export default App2;