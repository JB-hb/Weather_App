import React from "react";
import './datos.css'

const datos = ({icon, name, content, clas}) => {

    return(
        <div className={clas + ' datCont'}>
            <span>
                {icon}
            </span>
            <span className="cont">
                <p>{name}</p>
                <p>{content}</p>
            </span>
        </div>
    )

}

export default datos