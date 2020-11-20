import React from "react";
import './base.scss'
import Space from "../space/Space";

export default function Base({baseData}) {
    return <div className='base'>{baseData.map(({type, energyCost, columnSpan, diceModifier}, index) => {
        if(typeof type === 'undefined') return <div/>
        return <Space type={type} energyCost={energyCost} columnSpan={columnSpan} key={index}
                      diceModifier={diceModifier}/>
    })}</div>
}
