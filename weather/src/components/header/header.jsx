import React from "react";
import './header.css'
import {TiWeatherPartlySunny, TiWeatherSunny} from 'react-icons/ti'
import {FiMoon} from 'react-icons/fi'
import darkContext from "../../context/darkContext";
import { useContext } from "react";

const Header = ()=>{
    
    const context = useContext(darkContext)
    const {dark, setDark} = context
    
    const changeHandle = () =>{
        setDark(!dark)
    }

    const darkStyle = {
        backgroundColor:"rgb(109, 109, 109)",
        color: 'rgba(251, 165, 0, 1)'
    }

    return(
        <div className="header" style={dark ? darkStyle:{backgroundColor:'white'}}>
            <TiWeatherPartlySunny size={60} color={dark ? 'rgba(251, 165, 0, 1)': 'rgb(134, 134, 134)'}/>
            <span>
                <label htmlFor='dark'><FiMoon size={20}/></label>
                <input type="checkbox" id="dark" checked={dark} onChange={changeHandle}/>
                <label htmlFor="dark"><TiWeatherSunny size={25}/></label>
            </span>
        </div>
    )
}

export default Header