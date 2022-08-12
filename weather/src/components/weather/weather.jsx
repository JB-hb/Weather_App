import React from "react";
import './weather.css'

const Weather = ({icon, weth})=>{
    return(
    <div className="weCont">
        {icon}
        <p>{weth}</p>
    </div>)
}

export default Weather