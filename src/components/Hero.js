import React from "react";
import  "./HeroStyles.css";
import hero from './assets/12.jpg';
function Hero (){
    return(
        <>
        <div className="hero">
            <img alt="HeroImg" src={hero}/>
        </div>
        </>
    )

}

export default Hero;