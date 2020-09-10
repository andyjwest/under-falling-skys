import React from "react";
import {rows} from "./sky-data";
import {arrayOf, bool, func, number, shape} from "prop-types";
import './sky.scss'
import SkySpace from "./SkySpace";

export default function Sky({difficultly, ships, motherShipRow, shiftShip}) {
    return <div className='sky' style={{gridTemplateRows: `repeat(${rows.length - motherShipRow -1}, 100px)`}}>
        {rows(difficultly).map((row, x) => {
            if(motherShipRow >= x)
                return <></>
            return row.map((cell, y) => {
                let ship
                let shipIndex
                if(ships){
                    ship = ships.find(ship => ship.x === x && ship.y === y)
                    shipIndex = ships.indexOf(ship)
                }
                return <SkySpace data={cell} ship={ship} key={`${x}-${y}`} shiftShip={(v)=>shiftShip(v, shipIndex)} />
            })
        })}
    </div>
}

Sky.defaultProps = {
    difficultly: [true, true, true, true],
    motherShipRow: -1
}

Sky.propTypes = {
    difficultly: arrayOf(bool),
    ships: arrayOf(shape({
        x: number,
        y: number
    })),
    motherShipRow: number,
    shiftShip: func
}
