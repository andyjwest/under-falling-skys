import React from "react";
import './dice.scss'

export default function({color, value}){
    return <div className={`dice ${color}`}>
        {value}
    </div>
}
