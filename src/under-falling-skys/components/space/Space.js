import React from 'react'
import func, {arrayOf, bool, number, oneOf} from 'prop-types'
import {Bolt, types} from "../../../atoms/icons/Icons";
import './space.scss'
import Dice from "../../../atoms/dice/Dice";

export default function Space({columnSpan, rowStart, rowEnd, type, energyCost, diceModifier, dieValue, excavated}) {

    const style = {}
    if(columnSpan) {
        style['gridColumn'] = `span ${columnSpan}`
    }
    if(rowStart) {
        style['gridRowStart'] = rowStart
    }
    if(rowEnd) {
        style['gridRowEnd'] = rowEnd
    }

    return <div className={`space ${type}`} style={style}>
        {!excavated && <div className='unexcavated'/>}
        <div>
            <div className='dice-placement'>
                {dieValue && <div>{dieValue.map(die => <Dice value={die.value} color={die.color}/>)}</div>}
                {diceModifier && <div className='dice-modifier'>{diceModifier}</div>}
            </div>
            <div className='icon'>{type.map(t => types[t])}</div>
            {energyCost && <div  className='energy-cost'>{Array(energyCost).fill(0)
                .map(()=> Bolt(.5))}</div>}
        </div>
    </div>
}

Space.propTypes = {
    activate: func,
    columnSpan: number,
    rowStart: number,
    rowEnd: number,
    type: arrayOf(oneOf(Object.keys(types)).isRequired).isRequired,
    energyCost: number,
    diceModifier: number,
    dieValue: arrayOf(number),
    excavated: bool
}
